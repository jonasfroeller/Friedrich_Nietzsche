<script lang="ts">
	import { Presentation, Slide, Step, Stack, FitText, Stretch } from '@components'
	import Media from '@lib/components/media.svelte'
	import Notes from '@lib/components/notes.svelte'
	import Split from '@lib/components/split.svelte'

	import NietzscheImage from './lib/assets/Friedrich_Nietzsche.jpg';
	import Icon from '@iconify/svelte'

	let visible_quotes = 0
</script>

<!-- Notes are visible with the `S` key in the browser -->

<Presentation>
	<!-- Steckbrief -->
	<Slide animate transition={'slide'}>
		<section>
			<Split>
				<Media
					class="w-full h-auto"
					src={NietzscheImage}
					alt="Friedrich_Nietzsche"
					author="https://de.wikipedia.org/wiki/Friedrich_Hermann_Hartmann"
					source="https://de.wikipedia.org/wiki/Datei:Nietzsche187a.jpg"
					type="img"
					slot="left"
				/>
	
				<article slot="right">
					<h1>Friedrich Wilhelm Nietzsche</h1>
					<p><em class="flex items-center justify-center gap-3 mt-4 text-base text-gray-400"><Icon width={"30px"} color="rgb(156 163 175)" icon="emojione-monotone:speaking-head"/> <span class="block mt-auto">Friedrich "KNEE CHA"</span></em></p><br>
	
					<div class="prose text-left prose-slide dark:prose-invert prose-li:m-0">
						<ul>
							<li>deutscher</li>
							<li><span class="flex items-center m-0">großer&nbsp;&nbsp;<Icon width={"25px"} icon="streamline:moustache-solid"/></span></li>
							<li>Philosoph, Dichter, klassischer Philologe</li>
							<li>bekannt für seine scharfe Moral-, Religions- und Kulturkritik</li>
							<li><span class="flex items-center m-0">&zwj;<Icon width={"25px"} icon="mdi:baby-room"/>&nbsp;1844 im sächsischen Stadtteil Röcken der Stadt Lützen</span></li>
							<li><span class="flex items-center m-0">&zwj;<Icon width={"25px"} icon="game-icons:hasty-grave"/>&nbsp;1900 in Weimar (etwa 180km von Lützen entfernt)</span></li>
							<li class="pt-4">Familie:</li>
							<ul class="m-0">
								<li><strong>Carl Ludwig Nietzsche (Vater)</strong>: evangelischer (lutherischer) Pfarrer</li>
								<li><strong>Franziska Nietzsche (Mutter)</strong></li>
								<li><strong>Elisabeth Förster-Nietzsche (Schwester)</strong></li>
								<li><strong>Ludwig Joseph Nietzsche (Bruder, 1848-1850)</strong></li>
							</ul>
						</ul>
					</div>
				</article>
			</Split>

			
			<Notes><!-- 1 min 13 sec -->
				[1 min 13 sec]<br><br>

				Friedrich Nietzsche ist bis heute einer der <b>einflussreichsten Denker</b>.<br>
				Friedrich Wilhelm, heißt er zu Ehren des <b>preußischen Königs</b> Friedrich Wilhelm IV.,<br>
				an dessen <b>Geburtstag</b> er geboren wurde.<br>
				Der deutsche Dichter & Denker inspiriert sicher viele Menschen mit seinem <b>gut gepflegten Schnurrbart</b>.<br>
				Aber auch seine Werke, die er als <b>Philosoph, Dichter und klassischer Philologe</b> (Sprach- und Literaturwissenschaftler) verfasste,<br>
				sind heute sehr bekannt und inspirieren auch sicherlich viele Menschen.<br>

				<b>Bekannt</b> ist Herr Nietzsche vor allem für seine <b>scharfe Moral</b> (strengen ethische Überzeugungen) - (genau so scharf wie sein <b>Schnurrbart</b>),<br>
				seine <b>Religions- und Kulturkritik</b>.<br><br>
				

				~ Einleitung Leben ~<br>
				
				Nietzsche wuchs in eben jenem frommen und beengten <b>Milieu</b> auf,<br>
				das er später in seinen Werken angriff.<br>
				Der Schriftsteller wurde am 15. Oktober 1844 im sächsischen Stadtteil Röcken der Stadt Lützen <b>geboren</b>,<br>
				das ist in Ostdeutschland.<br><br>

				Seit der Reformation im 16. Jahrhundert ist die Familie Nietzsche als <b>evangelisch</b> dokumentiert.<br>
				Nicht nur Mutter und Vater waren evangelisch,<br>
				auch viele andere Familienmitglieder waren protestantische Pfarrer.<br><br>
				
				Nietzsches <b>Vater starb 1849</b>, als Nietzsche erst 5 Jahre alt war.<br>
				Die Familie zog daraufhin nach <b>Naumburg.</b><br>
				Bereits mit <b>zehn Jahren</b> verfasste Nietzsche Gedichte und Kompositionen.<br>
				In Naumburg wächst der intellektuell auffallend begabte Junge in einem reinen <b>Frauenhaushalt</b> auf,<br>
				was uns zum Leben des Schriftstellers bringt.<br><br>

				Die <b>Umstellung</b> vom Land auf die Stadt bereitete Nietzsche Schwierigkeiten.<br>
				In der Stadt lebte er schlussendlich von <b>1850 bis 1856</b> im "Naumburger Frauenhaushalt".
			</Notes>
		</section>
	</Slide>

	<!-- Leben -->
	<Slide animate transition={'zoom'}>
		<FitText>
			Leben

			<Notes>
				Leben
			</Notes>
		</FitText>
	</Slide>

	<Slide animate transition={'zoom'}>
		<section class="mx-auto prose text-left mt-36 prose-slide dark:prose-invert"> <!-- mt-36, because css in so many nested html elements makes me want to kill myself -->
			<Stack>
				<div class="bg-[var(--r-background-color)] h-screen w-screen">
					<h1 class="text-left">Leben</h1>
					<h2>Jugend (1844-1869)</h2>
	
					<ul>
						<li><em>Geburt am 15. Oktober 1844 in Röcken, Sachsen</em></li>
						<li><em>Umzug nach Naumburg nach dem Tod des Vaters 1849</em></li>
						
						<li><em>1850-1856 - Naumburger Frauenhaushalt</em></li>
						<li>1854 - Eintritt in das Domgymnasium Naumburg</li>
						<li>1856 - Erbe der Großmutter ermöglicht eigene Wohnung</li>
	
						<li>Aufnahme in die Landesschule Pforta 1858 durch Stipendium</li>
						<li>1860 gründete er mit Freunden „Germania“</li>
						<li>Studium der klassischen Philologie in Bonn 1864-1869</li>
					</ul>
				</div>
			
				<Step>
					<div class="bg-[var(--r-background-color)] h-screen w-screen">
						<h1 class="text-left">Leben</h1>
						<h2>Professor an der Universität Basel (1869-1879)</h2>
	
						<ul>
							<li>Berufung als außerordentlicher Professor für klassische Philologie in Basel 1869</li>
							<li>Entdeckung des quantitierenden Prinzips in der antiken Metrik</li>
							<li>Freundschaft mit Richard Wagner ab 1868</li>
							<li>Veröffentlichung von "Die Geburt der Tragödie" 1872</li>
							<li>Bekanntschaft mit Bertha Rohr 1873</li>
						</ul>
					</div>
				</Step>
	
				<Step>
					<div class="bg-[var(--r-background-color)] h-screen w-screen">
						<h1 class="text-left">Leben</h1>
						<h2>Freier Philosoph (1879-1889)</h2>
				
						<ul>
							<li>1879 - Pensionierung als Professor in Basel</li>
	
							<li>Reisen und Leben als freier Autor</li>
							<li>Bekanntschaft mit Lou von Salomé in Rom 1882</li>
							<li>Bruch mit Wagner und Schopenhauer</li>
							<li>Veröffentlichung von "Also sprach Zarathustra" 1883</li>
							<li>Abbruch der Freundschaft zu Lou von Salomé 1883</li>
						</ul>
					</div>
				</Step>
	
				<Step>
					<div class="bg-[var(--r-background-color)] h-screen w-screen">
						<h1 class="text-left">Leben</h1>
						<h2>In geistiger Umnachtung (1889-1900)</h2>
	
						<ul>
							<li>Zusammenbruch in Turin am 3. Januar 1889</li>
							<li>Unterbringung in verschiedenen Anstalten</li>
							<li>Tod am 25. August 1900 in Weimar</li>
						</ul>
					</div>
				</Step>
			</Stack>
	
			<Notes><!-- 3 min 44 sec -->
				[4 min 57 sec]<br><br>
				
				(0)<br>
				Nietzsche wurde erst in einer privaten Einrichtung unterrichtet und ging dann ab 1854 auf das Dom-Gymnasium in Naumburg.<br>
				Dort zeigte sich schnell seine intellektuelle Begabung.<br>
				Das Erbe seiner Großmutter ermöglichte ihm in folge dessen eine eigene Wohnung.<br>
				1858 wurde Nietzsche durch ein Stipendium in die Landesschule Pforta aufgenommen, wo er erste richtige Freundschaften knüpfte.<br> 
				Diese Schule genoss damals den Ruf als eine der bedeutendsten Bildungseinrichtungen Deutschlands.<br><br>

				Gemeinsam mit seinen Freunden Pinder und Krug traf sich Nietzsche ab 1860 auf der Burgruine Schönburg,<br>
				wo er mit ihnen über Literatur, Philosophie, Musik und Sprache diskutierte.<br>
				Mit ihnen gründete er dort die künstlerisch-literarische Vereinigung „Germania“.<br> 
				Die Gründungsfeier fand 1860 statt.<br>
				Gedichte und Kompositionen mussten regelmäßig geliefert werden.<br>
				Man wollte dann gemeinsam darüber diskutieren.“ Die Versammlungen fanden vierteljährlich statt.<br>
				Bereits in dieser Zeit entwickelte Nietzsche seine Leidenschaft für die Musik Richard Wagners (Wagner war einer von Hitlers liebsten Komponisten).<br>
				1863 wurde die Germania aufgelöst, nachdem Pinder und Krug ihr Interesse daran verloren hatten.<br><br>

				Sein Studium der klassischen Philologie begann er 1864 in Bonn.<br>
				Bereits mit Mitte zwanzig erhält Nietzsche dann eine Professur für klassische Philologie.<br>
				In dieser Zeit beginnt auch eine intensive, aber letztlich scheiternde Freundschaft mit Richard Wagner.<br>
				Unter dessen Einfluss entsteht Nietzsches erstes bedeutendes Werk:<br>
				"Die Geburt der Tragödie aus dem Geiste der Musik" (1872).<br><br>

				(1)<br>
				~ Professor an der Universität Basel (1869-1879) ~<br>
				1869 wurde Nietzsche auf Empfehlung seines Lehrers Friedrich Ritschl<br>
				als außerordentlicher Professor für klassische Philologie an die Universität Basel berufen.<br>
				Zuvor war er noch preußischer Staatsbürger,<br>
				nach seiner Übersiedlung in die Schweiz 1869 wurde er auf eigenen Wunsch hin staatenlos.<br>
				Seine Erkenntnis des quantitierenden Prinzips in der antiken Metrik war bedeutend. (beschreibt einen regelmäßigen Wechsel von langen und kurzen Silben in Versen)<br>
				Nietzsche fand übrigens, dass Universitäten schlecht für uns Menschen sind, nur trockene akademische Übung, keine Anleitung zum Leben.<br>
				In seiner Zeit als Professor entwickelte sich auch seine Freundschaft mit Richard Wagner.<br><br>
				
				Ab 1871 verschlechterte sich sein Gesundheitszustand durch ein Augenleiden,<br>
				das nicht nur mit viel Schmerzen verbunden war,<br>
				sondern auch mit fast vollständiger Erblindung.<br>
				In dieser Zeit veröffentlichte er beispielsweise "Die Geburt der Tragödie" (1872).<br>
				1873 lernte er Bertha Rohr kennen. Es ist nicht klar ob sie eine Beziehung hatten.<br><br>

				(2)<br>
				~ Freier Philosoph (1879-1889) ~<br>
				Nach seiner Pensionierung nur 10 Jahre später aufgrund gesundheitlicher Probleme 1879,<br>
				reiste Nietzsche als freier Autor und lebte von seiner Pension.<br>
				Er bereiste Orte, von denen er hoffte, deren Klima würde sich günstig auf seine diversen Leiden auswirken<br>
				- vor allem Italien und die Schweiz.<br>
				Die Sommer verbrachte er in Sils Maria, Schweiz und die Winter in Italien.<br>
				Er brach mit Wagner und Schopenhauer, knüpfte 1882 Bekanntschaft mit Lou von Salomé<br>
				und veröffentlichte 1883 "Also sprach Zarathustra".<br>
				Nietzsche verliebte sich schließlich in Lou von Salomé. Salomé wies ihn jedoch ab. Die Freundschaft mit Lou von Salomé endete somit 1883.<br><br>

				(3)<br>
				~ In geistiger Umnachtung (Die Zeit, in der er nicht ganz bei klarem Verstand war) (1889-1900) ~<br>
				Nietzsches gesundheitlicher Zustand ist zeitlebens fragil, immer wieder quälen ihn heftige Migräneanfälle.<br>
				Ab seinem 45. Lebensjahr (1889) litt er unter zunehmenden psychischen Störungen,<br>
				die ihn arbeits- und geschäftsunfähig machten.<br>
				Die letzten 12 Jahre seines Lebens verbringt er in geistiger Umnachtung (nicht bei klarem Verstand).<br> 
				Am 3. Januar 1889 erlitt Nietzsche einen Zusammenbruch in Turin.<br>
				Er wurde in verschiedenen Anstalten untergebracht. Er konnte kurze Gespräche führen, erkannte aber oft niemanden.<br>
				Sein Gesundheitszustand verschlechterte sich weiter.<br>
				Seinen Anfang der 1890er Jahre einsetzenden Ruhm erlebte er nicht mehr bewusst.<br><br>
				
				Den Rest seines Lebens verbrachte er als Pflegefall in der Obhut zunächst seiner Mutter, dann seiner Schwester<br>
				in der Villa Silberblick in Weimar.<br>
				Er starb am 25. August 1900 im Alter von 55 Jahren an Pneumonie (Lungenentzündung) und einem Schlaganfall.<br><br>
				
				Die Vermutung, die Spätfolgen einer Syphilis könnten beim Krankheitsverlauf eine Rolle gespielt haben,<br>
				hielt sich gut 100 Jahre.<br>
				Heute vermutet man, er habe CADASIL gehabt.<br>
				Das ist eine genetische Erkrankung, die zu familiär gehäuften Schlaganfällen im mittleren Lebensalter führen kann.<br><br>

				Er hinterlässt ein sprachlich brillantes, oft widersprüchliches Werk,<br>
				das von den Nationalsozialisten vereinnahmt wurde, aber auch linke Theoretiker wie Michel Foucault beeinflusste.<br>
				Das ist nicht der mit dem Pendel, der Léon heißt, sondern ein Philosoph.<br><br>

				Seine Schwester Elisabeth Förster-Nietzsche übernahm die Kontrolle über seinen Nachlass.
			</Notes>
		</section>
	</Slide>

	<!-- Person -->
	<Slide animate transition={'zoom'}>
		<FitText>
			Person

			<Notes>
				Person
			</Notes>
		</FitText>
	</Slide>

	<Slide animate transition={'zoom'}>
		<section class="mx-auto prose text-left mt-36 prose-slide dark:prose-invert"> <!-- mt-36, because css in so many nested html elements makes me want to kill myself -->
			<Stack>
				<div class="bg-[var(--r-background-color)] h-screen w-screen">
					<h1>Person</h1>
					<ul>
						<li>Familienkonflikte, Ablehnung durch Frauen.</li>
						<li>Außenseiter, gegen Normen.</li>
					</ul>
				</div>
				
				<Step>
					<div class="bg-[var(--r-background-color)] h-screen w-screen">
						<h1>Person</h1>
						<ul>
							<li>Interesse an allem außer Mathematik.</li>
							<li>Religion als „Grundveste alles Wissens!“ und die „Grundlage des Staates“</li>
						</ul>
					</div>
				</Step>

				<Step>
					<div class="bg-[var(--r-background-color)] h-screen w-screen">
						<h1>Person</h1>
						<ul>
							<li>Kritik an gängigen Wertvorstellungen.</li>
							<li>Ideale wie Gleichheit, Mitleid subjektiv.</li>
						</ul>
					</div>
				</Step>

				<Step>
					<div class="bg-[var(--r-background-color)] h-screen w-screen">
						<h1>Person</h1>
						<ul>
							<li>Denker ohne klassische Zuordnung.</li>
							<li>Begründer Lebensphilosophie.</li>
						</ul>
					</div>
				</Step>

				<Step>
					<div class="bg-[var(--r-background-color)] h-screen w-screen">
						<h1>Person</h1>
						<ul>
							<li>Beeindruckt von Schopenhauers Philosophie.</li>
							<li>Kritik an Moral, Religion, Kunst.</li>
						</ul>
					</div>
				</Step>

				<Step>
					<div class="bg-[var(--r-background-color)] h-screen w-screen">
						<h1>Person</h1>
						<ul>
							<li>Keine systematische Philosophie.</li>
							<li>Aphorismen, Prosa, lyrischer Stil.</li>
						</ul>
					</div>
				</Step>
			</Stack>

			<Notes><!-- 2 min 37 sec --> <!-- TODO -->
				[7 min 34 sec]<br><br>
				
				(0)<br>
				Nietzsche verstand sich nicht gut mit seiner Familie. Frauen lehnten ihn ab.<br>
				Er war ein Außenseiter, von schwächlicher Körpergestalt, ein Einzelgänger,<br>
				der die Menschen mied und sich ungewandt in der Welt bewegt<br>
				und sich nicht an die Normen seiner Zeit hielt.<br><br> 
				
				(1)<br>
				Nietzsche interessierte sich für alles außer Mathematik.<br>
				Die Religion war ihm die „Grundveste alles Wissens!“ und die „Grundlage des Staates“.<br><br>

				(2)<br>
				In seinen Schriften wie etwa der Genealogie der Moral (1887)<br>
				kritisiert Nietzsche gängige Wertvorstellungen.<br>
				Für ihn haben Ideale wie Gleichheit oder Mitleid keine objektive Gültigkeit.<br>
				Vielmehr verändern Werte sich je nach historischer Situation und sind zudem Ausdruck<br>
				verschleierter psychologischer Bedürfnisse.<br><br>
				
				(3)<br>
				Nietzsche sprengte sowohl mit seinem Denken als auch mit seinem Stil bis dahin<br>
				gängige Muster und ließ sich zunächst keiner klassischen Disziplin zuordnen.<br>
				Heute gilt er manchen als Begründer einer neuen philosophischen Schule, der Lebensphilosophie.<br><br>
	
				(4)<br>
				Den jungen Nietzsche beeindruckte besonders die Philosophie Schopenhauers.<br>
				Später wandte er sich von dessen Pessimismus ab. Sein Lebenswerk enthält scharfe Kritiken an<br>
				Moral, Religion, Philosophie, Wissenschaft und Formen der Kunst.<br><br>
	
				(5)<br>
				Nietzsche schuf keine systematische Philosophie. Oft wählte er den Aphorismus (selbständiger einzelner Gedanke, ein Urteil oder eine Lebensweisheit.) als Ausdrucksform seiner Gedanken.<br>
				Seine Prosa (trockene, nüchterne Darstellung), seine Gedichte und der pathetisch-lyrische (intensive Gefühle und poetische Ausdrucksweise) Stil von<br>
				"Also sprach Zarathustra" verschafften ihm auch als Schriftsteller Anerkennung.<br><br>
				
				Nietzsche verschaffte sich den Ruf als einer der bedeutendster Aphoristiker und Essayist.<br>
				Besonders die Existenzialphilosophie orientierte sich an der Philosophie Nietzsches.
			</Notes>
		</section>
	</Slide>

	<!-- Nietzsche und der Buddhismus -->
	<Slide animate transition={'zoom'}>
		<FitText>
			Nietzsche<br>
			und der<br>
			Buddhismus

			<Notes>
				Nietzsche und der Buddhismus
			</Notes>
		</FitText>
	</Slide>

	<Slide animate transition={'zoom'}>
		<section class="max-w-full mx-auto prose text-left prose-slide dark:prose-invert">
			<h1 class="text-center">Nietzsche und der Buddhismus</h1>

			<Stretch
				class="mx-auto"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Tapa_Shotor_seated_Buddha_%28Niche_V1%29.jpg/800px-Tapa_Shotor_seated_Buddha_%28Niche_V1%29.jpg"
				type="img"
		  	/>

			<blockquote class="text-2xl" cite="https://www.philognosie.net/wissen-technik/friedrich-wilhelm-nietzsches-philosophie-im-ueberblick">
				"Die Praxis des Christenthums ist keine Phantasterei, so wenig die Praxis des Buddhismus sie ist: sie ist ein Mittel; glücklich zu sein …"
			</blockquote>

			<Notes><!-- 37 sec -->
				[8 min 11 sec]<br><br>
				
				Nietzsche drückt in seinen autobiographischen Aufzeichnungen tief empfundene Religiosität aus, indem er sich von Gott wie ein Kind von seinem Vater geleitet fühlt.<br>
				Die Beziehung zwischen Schopenhauer und dem Buddhismus beeinflusst auch Nietzsche, der sich in Briefen sogar mit Buddha identifiziert.<br><br>
				
				<!-- Seine Haltung zum Buddhismus ist ambivalent (mehrdeutig), von kritischer Analyse bis zur Integration buddhistischer Konzepte in seine Philosophie.<br>
				In verschiedenen Werken, nicht nur Briefen, zeigt Nietzsche seine Auseinandersetzung mit dem Buddhismus, wie etwa in einem Zitat aus "Die fröhliche Wissenschaft" von 1882.<br>
				Dies verdeutlicht die Vielschichtigkeit seiner Beziehung zu diesem Thema.<br><br> -->

				"Die Praxis des Christenthums ist keine Phantasterei, so wenig die Praxis des Buddhismus sie ist: sie ist ein Mittel; glücklich zu sein …" ~ "Die fröhliche Wissenschaft"
			</Notes>
		</section>
	</Slide>

	<!-- Selbstüberwindung & Übermensch -->
	<Slide animate transition={'zoom'}>
		<FitText>
			Selbstüberwindung & Übermensch

			<Notes>
				Selbstüberwindung & Übermensch
			</Notes>
		</FitText>
	</Slide>
	
	<Slide animate transition={'zoom'}>
		<section class="mx-auto prose text-left prose-slide dark:prose-invert">
			<h1>Selbstüberwindung & Übermensch</h1>
			<h2>Nietzsches 4 Empfehlungen</h2>
			<blockquote>"werden, wer wir wirklich sind"</blockquote>

			<ol>
				<li><span class="flex items-center m-0">&zwj;<Icon width={"25px"} color="var(--tw-prose-counters)" icon="game-icons:devil-mask"/>&nbsp;akzeptiere Neid als Komponente in deinem Leben</span></li>
				<li><span class="flex items-center m-0">&zwj;<Icon width={"25px"} color="var(--tw-prose-counters)" icon="mdi:christianity"/>&nbsp;sei KEIN Christ</span></li>
				<li><span class="flex items-center m-0">&zwj;<Icon width={"25px"} color="var(--tw-prose-counters)" icon="healthicons:alcohol"/>&nbsp;trink KEINEN Alkohol</span></li>
			</ol>
			<ul>
				<li class="list-none"><span class="flex items-center m-0">&zwj;<Icon width={"25px"} color="var(--tw-prose-counters)" icon="gridicons:arrow-right"/>&nbsp;Gott ist tot</span></li>
				<ul>
					<ul>
						<li>Religiöser Glaube als falsch, aber hilfreich um mit Problemen klar zu kommen (Religion = Alkohol)</li>
						<li>Lücke in Leben ohne Religion sollte durch Kultur (Literatur, Kunst etc.) gefüllt werden</li>
					</ul>
				</ul>
			</ul>

			<blockquote cite="https://www.youtube.com/watch?v=wHWbZmg2hzU">
				Es gab zwei große Betäubungsmittel in der europäischen Zivilisation: das Christentum und Alkohol.
			</blockquote>
			

			<Notes><!-- 3 min 6 sec -->
				[11 min 26 sec]<br><br>
				
				Selbstüberwindung & Übermensch<br><br>

				Nietzsches Ideal des Übermenschen war in vielen Aspekten das Gegenteil von ihm selbst.<br>
				Diese Vorstellung führte nicht nur zu einem fiktiven Dasein,<br>
				sondern schuf auch einen Mythos seiner eigenen Person durch die Idee des Übermenschen.<br><br>

				Unter dem Einfluss von Charles Darwins zeitgenössischer Selektionstheorie und Schopenhauers Willensmetaphysik 
				verbreitete Nietzsche die Philosophie des "Übermenschen",<br><br>

				Anstelle einer heuchlerischen und schwächenden Kultur, wie die des Christentums sollte eine umfassende Bejahung<br>
				des Lebens sowie ein Streben des Individuums nach Exzellenz treten.<br>
				In seinem bekanntesten Werk Also sprach Zarathustra (1883-1885)<br>
				entwickelt Nietzsche die umstrittene Idee dieses „Übermenschen“,<br>
				der alle menschlichen Schwächen überwunden hat.<br>
				Die Nationalsozialisten verstanden ihn als biologisch überlegenen „Herrenmenschen“,<br>
				während andere hier eine Aufforderung zu persönlicher Vervollkommnung sahen,<br>
				die sich an jeden richtet.<br><br>
				
				Die geistige Übernahme der Nationalsozialisten, besonders von der Vorstellung des Herrenmenschen, scheiterte daran,<br>
				dass Nietzsche sowohl Antisemitismus als auch den deutschen Nationalsozialismus rigoros ablehnte.<br><br>

				<!-- In seiner Metaphysik begründete Nietzsche alles Dasein<br>
				als eine durch den Machtwillen geschaffene Erscheinungsform.<br>
				Das menschliche Dasein betrachtete er als eine "ewige Wiederkehr",<br>
				die unausweichlich ist. Aufgrund dieser Unausweichlichkeit riet er dazu, dem Schicksal zu folgen,<br>
				da es keine andere Möglichkeit<br>
				für den Menschen gibt. In seiner Amor-fati-Formel (Liebe zum Schicksal) liegt die freudige Anerkennung des bestehenden Daseins.<br>
				Nietzsche wehrte sich gegen spekulatives Denken, was auch seine eigentliche Bedeutung als Philosoph ausmacht.<br>
				Darüber hinaus plädierte er immer wieder dafür, das Denken in das Leben einzubeziehen.<br><br>

				Die in der Moderne vorherrschende, christlich geprägte „Sklavenmoral“ ist<br>
				im Grunde durch Neid motiviert:<br>
				Weil man von seinen Mitmenschen nicht an Macht und Fähigkeiten übertroffen werden will,<br>
				fordert man Bescheidenheit, Nächstenliebe und dergleichen.<br>
				Letztlich aber, so Nietzsche, schaden diese Werte: Sie führen zu ständigen Schuldgefühlen<br>
				und sind lebensfeindlich.<br><br> -->

				Neid:<br>
				- Nietzsche akzeptiert Neid als Teil des Lebens<br>
				- Neid als Ansporn, um zu werden, was man wirklich will<br>
				- Neid als Anzeichen für Potenzial, nicht als Böses<br><br>

				Christen:<br>
				- Kritik am Christentum, besonders der Sklavenmoral (Werte wie Mitgefühl, Bescheidenheit und Mäßigung werden als tugendhaft gesehen)<br>
				- Christen wollen Erfüllung, sind aber unfähig, sie zu erreichen<br>
				- Christliche Werte als Leugnung und Heuchelei<br><br>
				
				Alkohol:<br>
				- Nietzsche trank nur Wasser und Milch<br>
				- Abneigung gegen Alkohol und Christentum wegen Betäubung von Schmerzen<br>
				- Wichtige Dinge erfordern Schmerz und Anstrengung<br><br>

				Schlussfolgerung:<br>
				- "Gott ist tot" als kritische Aussage, nicht zum Feiern<br>
				- Religiöser Glaube als falsch, aber hilfreich für Probleme<br>
				- Lücke ohne Religion sollte durch Kultur (Philosophie, Kunst) gefüllt werden<br>
				- Skepsis gegenüber der Handhabung von Kultur in seiner Epoche<br>
				- Forderung nach Reformation, Nutzung von Philosophie und Kunst als Anleitung zum Leben<br>
				- Nietzsche als reizender, faszinierender Ratgeber, trotz Herausforderungen seiner Zeit<br><br>

				"Es gab zwei große Betäubungsmittel in der europäischen Zivilisation: das Christentum und Alkohol."<br>
				Beide betäuben Schmerz und sorgen dafür, dass man sich zwar besser fühlt, aber nicht wirklich besser ist.
			</Notes>
		</section>
	</Slide>
	
	<!-- Werke -->
	<Slide animate transition={'zoom'}>
		<FitText>
			Werke

			<Notes>
				Werke
			</Notes>
		</FitText>
	</Slide>

	<Slide animate transition={'zoom'}>
		<section class="mx-auto prose text-left prose-slide dark:prose-invert">
			<h1>Werke</h1>

			<table>
				<tr>
					<th>Titel</th>
					<th>Veröffentlichungsjahr</th>
					<th>Interessante Aspekte</th>
				</tr>
				<tr>
					<td>Die Geburt der Tragödie</td>
					<td>1872</td>
					<td>Einfluss der griechischen Tragödie, Apollinisch-Dionysischer Konflikt</td>
				</tr>
				<tr>
					<td>Menschliches, Allzumenschliches</td>
					<td>1878</td>
					<td>Abwendung vom romantischen Denken</td>
				</tr>
				<tr>
					<td>Die fröhliche Wissenschaft</td>
					<td>1882</td>
					<td>Der Tod Gottes, Übermensch-Konzept</td>
				</tr>
				<tr>
					<td>Also sprach Zarathustra</td>
					<td>1883</td>
					<td>Übermensch, Ewige Wiederkunft</td>
				</tr>
				<tr>
					<td>Jenseits von Gut und Böse</td>
					<td>1886</td>
					<td>Master-Slave-Moral, Perspektivismus</td>
				</tr>
				<tr>
					<td>Zur Genealogie der Moral</td>
					<td>1887</td>
					<td>Herleitung von Moralbegriffen, Sklavenmoral</td>
				</tr>
			</table>

			<Notes><!-- 1 min 6 sec -->
				[12 min 32 sec]<br><br>
				
				Nietzsches Werke sind leicht zu lesen. Man braucht keine philosophische Vorbildung, um sie zu verstehen.<br><br>
				
				1872 erschien seine erste Veröffentlichung "Die Geburt der Tragödie aus dem Geist der Musik",<br>
				die vor den Augen seines Lehrers Ritschl kein gutes Urteil erhielt.<br><br><br><br><br><br><br><br><br>

				Interessante Aspekte:<br>
				Die Geburt der Tragödie (1872):<br>
				In diesem Werk reflektiert Nietzsche über den Einfluss der antiken griechischen Tragödie auf die Kultur.<br>
				Er präsentiert den Konflikt zwischen dem Apollinischen (ordnenden Prinzip) und dem Dionysischen (chaotisches, kreatives Prinzip).<br><br>

				Menschliches, Allzumenschliches (1878):<br>
				Hier wendet sich Nietzsche von romantischen Ideen ab und präsentiert Aphorismen,<br>
				kurze und prägnante Gedanken zu verschiedenen Themen des menschlichen Lebens.<br><br>
				
				Die fröhliche Wissenschaft (1882):<br>
				Nietzsche verkündet hier den "Tod Gottes" und stellt das Konzept des Übermenschen vor,<br>
				der über traditionelle moralische Vorstellungen hinausgeht.<br><br>
				
				Also sprach Zarathustra (1883-1885):<br>
				In diesem philosophischen Werk verkündet der Protagonist Zarathustra Ideen wie den Übermenschen und die Ewige Wiederkunft.<br><br>
				
				Jenseits von Gut und Böse (1886):<br>
				Nietzsche untersucht hier die Natur von Moral und präsentiert die Ideen der<br>
				"Master-Slave-Moral" sowie den Perspektivismus, der betont, dass es keine objektive Realität gibt.<br><br>
				
				Zur Genealogie der Moral (1887):<br>
				Das Werk erforscht die Herkunft von moralischen Werten und betrachtet<br>
				insbesondere die Entstehung der Sklavenmoral und ihre Auswirkungen auf die Gesellschaft.
			</Notes>
		</section>
	</Slide>

	<!-- Zitate -->
	<Slide animate transition={'zoom'}>
		<FitText>
			Zitate

			<Notes>
				Zitate
			</Notes>
		</FitText>
	</Slide>

	<Slide animate transition={'zoom'}>
		<section class="w-full max-w-full prose text-left prose-slide dark:prose-invert">
			<h1>Zitate</h1>

			<Step fadeRight>
				<blockquote class="text-6xl {visible_quotes !== 0 ? "hidden" : ""}" cite="https://www.youtube.com/watch?v=wHWbZmg2hzU">
					"Was mich nicht umbringt, macht mich stärker."
				</blockquote>
			</Step>
			
			<Step fadeRight>
				<blockquote class="text-6xl {visible_quotes !== 0 ? "hidden" : ""}" cite="https://www.youtube.com/watch?v=wHWbZmg2hzU">
					"Wie wenig ihr vom Glück der Menschen wisst - ihr bequemen Leute! Das Geheimnis eines erfüllten Lebens liegt darin, gefährlich zu leben!"
				</blockquote>
			</Step>
			
			<Step fadeLeft on:in={() => visible_quotes++} on:out={() => visible_quotes = 0}>
				<blockquote class="text-6xl {visible_quotes === 0 ? "hidden" : ""}" cite="https://www.youtube.com/watch?v=wHWbZmg2hzU">
					"Gott ist tot! Und wir haben ihn getötet."
				</blockquote>
			</Step>
			
			<Step fadeLeft>
				<blockquote class="text-6xl {visible_quotes === 0 ? "hidden" : ""}" cite="https://www.youtube.com/watch?v=wHWbZmg2hzU">
					"Ich mag meine Mutter nicht, und es schmerzt mich, die Stimme meiner Schwestern zu hören."
				</blockquote>
			</Step>			

			<Notes><!-- 22 sec -->
				[12 min 54 sec]<br><br>
				
				Nietzsche verfasste einige provokative Äußerungen und einige Zitate möchte ich euch jetzt gerne vorlesen:<br><br>
				
				"Was mich nicht umbringt, macht mich stärker."<br>

				"Wie wenig ihr vom Glück der Menschen wisst - ihr bequemen Leute!
				Das Geheimnis eines erfüllten Lebens liegt darin, gefährlich zu leben!"<br>

				"Gott ist tot! Und wir haben ihn getötet."<br>
				
				"Ich mag meine Mutter nicht, und es schmerzt mich, die Stimme meiner Schwestern zu hören."
			</Notes>
		</section>
	</Slide>

	<!-- Erbe -->
	<Slide animate transition={'zoom'}>
		<FitText>
			Erbe

			<Notes>
				Erbe
			</Notes>
		</FitText>
	</Slide>

	<Slide animate transition={'zoom'}>
		<section>
			<Split>
				<article slot="left" class="prose text-left prose-slide dark:prose-invert prose-li:m-0">
					<h1>Erbe</h1>

					<ul>
						<li>Musik</li>
						<li>Belletristik</li>
						<li>Filme</li>
						<li>Hörspiele</li>
						<li>Porträts & Fotografien</li>
						<li>Skulpturen</li>
						<li>Briefmarken</li>
						<li>Denkmal</li>
						<li>genetisch veränderter Mensch in der Fernsehserie Andromeda: "Nietzscheaner"</li>
					</ul>
				</article>

				<Stack slot="right">
					<Media
						class="w-full h-auto"
						src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Friederich_Nietzsche.jpg"
						alt="Friedrich_Nietzsche"
						type="img"
					/>
	
					<Step>
						<Media
							class="w-full h-auto"
							src="https://upload.wikimedia.org/wikipedia/commons/4/44/K%C3%B6selitz-Nietzsche.jpg"
							alt="Friedrich_Nietzsche"
							type="img"
						/>
					</Step>

					<Step>
						<Media
							class="w-full h-auto"
							src="https://upload.wikimedia.org/wikipedia/commons/9/90/Stamp_Germany_2000_MiNr2131_Friedrich_Nietzsche.jpg"
							alt="Friedrich_Nietzsche"
							type="img"
						/>
					</Step>
				</Stack>
			</Split>

			<Notes><!-- 37 sec -->
				[13 min 31 sec]<br><br>

				Nach Texten von Friedrich Nietzsche wurden einige musikalische Kompositionen geschaffen. Er komponierte auch selber.<br>
				Belletristik (Unterhaltungsliteratur), Filme, Hörspiele, Porträts und Skulpturen: darunter Totenmasken und Büste<br>
				sowie mehr als zehn Fotografien zwischen 1862 und 1900.<br>
				Auch Briefmarken wurden ihm gewidmet. Und es gibt einige Gedenkstätten.<br><br>

				Auch ein Denkmal wurde ihm gewidmet. Es steht in Naumburg.<br><br>

				Und in der Fernsehserie Andromeda gibt es eine Rasse, die nach ihm benannt wurde.<br>
				Menschen die genetisch manipuliert wurden, um die perfekte Rasse zu erschaffen.<br>
				Sie sollten lebende Götter sein.<br>
				Sie sind größer, stärker, schneller und immun gegen Gifte und Krankheiten<br>
				sowie wesentlich widerstandsfähiger gegenüber allen Umweltbedingungen.<br>
				Die Nietzscheaner hängen den Lehren des deutschen Philosophen Nietzsche an.
			</Notes>
		</section>
	</Slide>

	<!-- Elisabeth Förster-Nietzsche -->
	<Slide animate transition={'zoom'}>
		<FitText>
			Elisabeth
			<br>Förster-Nietzsche

			<Notes>
				Elisabeth Förster-Nietzsche
			</Notes>
		</FitText>
	</Slide>

	<Slide animate transition={'zoom'}>
		<section class="mx-auto prose text-left prose-slide dark:prose-invert">
			<h1>Therese Elisabeth Alexandra Nietzsche</h1>

			<span class="flex items-center"><Icon class="m-0" width={"40px"} color="var(--tw-prose-bullets)" icon="mdi:dot"/>
				alleinige Nachlassverwalterin
			</span>
	
			<Step fadeLeft class="m-0">
				<span class="flex items-center"><Icon class="m-0" width={"40px"} color="var(--tw-prose-bullets)" icon="mdi:dot"/>
					Gründerin und Leiterin des Weimarer "Nietzsche-Archivs"
				</span>
			</Step>
	
			<Step fadeLeft class="m-0">
				<span class="flex items-center"><Icon class="m-0" width={"40px"} color="var(--tw-prose-bullets)" icon="mdi:dot"/>
					Fälschungen an Nietzsches Schriften und Briefen wurden bekannt
				</span>
			</Step>
			
			<Step fadeLeft class="m-0">
				<span class="flex items-center"><Icon class="m-0" width={"40px"} color="var(--tw-prose-bullets)" icon="mdi:dot"/>
					wird für manche Deutungen ihres Bruders, verantwortlich gemacht
				</span>
			</Step>


			<Notes><!-- 41 sec -->
				[14 min 12 sec]<br><br>
				
				Elisabeth Nietzsche,<br>
				war die Schwester des Philosophen Nietzsche.<br>
				Als alleinige Nachlassverwalterin (0)<br>
				ihres Bruders und Gründerin und Leiterin des Weimarer<br>
				„Nietzsche-Archivs“ (1) nahm sie in der ersten Hälfte des 20. Jahrhunderts erheblichen Einfluss<br>
				auf den Nietzsche-Kult in Deutschland.<br><br>
	
				Nach dem Zweiten Weltkrieg wurden ihre Fälschungen an Nietzsches Schriften und Briefen bekannt. (2)<br>
				Sie wird für bestimmte Deutungen der Philosophie ihres Bruders,<br>
				besonders jene im Nationalsozialismus, verantwortlich gemacht und kritisiert (3). Das von ihr verbreitete Nietzsche-Bild kam<br>
				jedoch dem damaligen Zeitgeist entgegen und wurde von zahlreichen Gelehrten und Literaten weitgehend geteilt.<br>
				Vermutlich entpuppten sich die Fälschungen also als nicht echt, weil sie nicht mehr in den Zeitgeist nach dem 2. Weltkrieg passten.
			</Notes>
		</section>
	</Slide>

	<!-- Quellen -->
	<Slide animate transition={'zoom'}>
		<section class="mx-auto prose text-left prose-slide dark:prose-invert">
			<h1>Quellen</h1>
		
			<div class="flex gap-2">
				<div>
					<a class="no-underline hover:underline" href="https://www.wikiwand.com/de/Friedrich_Nietzsche">wikiwand.com (Person)</a><br>
					<a class="no-underline hover:underline" href="https://whoswho.de/bio/friedrich-nietzsche.html">whoswho.de (Person)</a><br>
					<a class="no-underline hover:underline" href="https://www.philomag.de/philosophen/friedrich-nietzsche">philomag.de (Person)</a><br>
					<a class="no-underline hover:underline" href="https://www.philognosie.net/wissen-technik/friedrich-wilhelm-nietzsches-philosophie-im-ueberblick">philognosie.net (Werke)</a><br>
					<a class="no-underline hover:underline" href="https://de.wikipedia.org/wiki/Elisabeth_F%C3%B6rster-Nietzsche">de.wikipedia.org (Schwester)</a><br>
					<a class="no-underline hover:underline" href="https://www.youtube.com/watch?v=ADWhVq5Rddo">youtube.com (Person)</a><br>
					<a class="no-underline hover:underline" href="https://www.youtube.com/watch?v=wHWbZmg2hzU">youtube.com (Person)</a><br>
					<a class="no-underline hover:underline" href="https://www.youtube.com/watch?v=oeRNqYW0sMU">youtube.com (Gott Ist Tot)</a><br>
					<a class="no-underline hover:underline" href="https://www.youtube.com/watch?v=mceXiVhkrTY">youtube.com (Wölfe und Schafe)</a><br>
					<a class="no-underline hover:underline" href="https://www.wikiwand.com/de/Andromeda_(Fernsehserie)#Nietzscheaner">wikiwand.com (Nietzscheaner)</a><br>
					<a class="no-underline hover:underline" href="https://domgymnasium-nmb.de/index.php?do=nietzsche">domgymnasium-nmb.de (Schule)</a>
				</div>
			</div>

			<Notes><!-- 3 sec -->
				[14 min 15 sec]<br><br>
				
				Quellenhölle: Eine Quelle sagt dies, eine sagt das. Ich liebe es zu recherchieren :/.
			</Notes>
		</section>
	</Slide>

	<!-- Technology -->
	<Slide animate transition={'slide'}>
		<section>
			<span class="prose prose-slide dark:prose-invert">
				<h1 class="block mx-auto">Made with <a href="https://kit.svelte.dev">Svelte</a> :&rpar; </h1>
			</span>

			<Icon class="block mx-auto mt-4" width={"250px"} icon="logos:svelte-icon"/>
		</section>
	</Slide>
</Presentation>

<!-- geschätzte Zeit: 10 min 284 sec => 14 min 44 sec -->