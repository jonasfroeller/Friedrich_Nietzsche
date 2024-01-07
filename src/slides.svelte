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
	<Slide animate transition={'slide'}>
		<section>
			<Split>
				<Media
					class="w-auto h-[60vh]"
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

			
			<Notes>
				Friedrich Nietzsche ist bis heute einer der einflussreichsten Denker.
				Friedrich Wilhelm, heißt er zu Ehren des preußischen Königs Friedrich Wilhelm IV., an dessen Geburtstag er geboren wurde. (Idee des Vaters)
				Der deutsche Dichter & Denker inspiriert sicher viele Menschen mit seinem gut gepflegten Schnurrbart.
				Aber auch seine Werke, die er als Philosoph, Dichter und klassischer Philologe verfasste, sind heute sehr bekannt und inspirieren auch sicherlich viele Menschen.
				Bekannt ist er vor allem für seine scharfe Moral- (genau so scharf wie sein Schnurrbart), Religions- und Kulturkritik.
				Er wurde am 15. Oktober 1844 im sächsischen Stadtteil Röcken der Stadt Lützen geboren. Das ist in Ostdeutschland.
				Er starb am 25. August 1900 in Weimar.
				Nietzsches Vater war evangelischer Pfarrer und starb, als Nietzsche erst 5 Jahre alt war.
				Seit der Reformation im 16. Jahrhundert ist die Familie Nietzsche als evangelisch dokumentiert. Nicht nur Mutter und Vater waren evangelisch, 
				auch viele andere Familienmitglieder waren protestantische Pfarrer.
				Anschließend wächst der intellektuell auffallend begabte Junge in einem reinen Frauenhaushalt auf, was uns zum Leben des Schriftstellers bringt.
			</Notes>
		</section>
	</Slide>

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
					<h2>Jugend (1844–1869)</h2>
	
					<ul>
						<li>Geburt am 15. Oktober 1844 in Röcken, Sachsen</li>
						<li>Umzug nach Naumburg nach dem Tod des Vaters 1849</li>
						
						<li>1850-1856 - Naumburger Frauenhaushalt</li>
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
						<h2>Professor an der Universität Basel (1869–1879)</h2>
	
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
						<h2>Freier Philosoph (1879–1889)</h2>
				
						<ul>
							<li>1879 - Pensionierung als Professor in Basel</li>
	
							<li>Reisen und Leben als freier Autor</li>
							<li>Bekanntschaft mit Lou von Salomé in Rom 1882</li>
							<li>Bruch mit Wagner und Schopenhauer</li>
							<li>Veröffentlichung von "Also sprach Zarathustra" 1883</li>
							<li>Freundschaft mit Peter Gast (Heinrich Köselitz)</li>
							<li>Abbruch der Freundschaft zu Paul Rée und Lou von Salomé 1883</li>
						</ul>
					</div>
				</Step>
	
				<Step>
					<div class="bg-[var(--r-background-color)] h-screen w-screen">
						<h1 class="text-left">Leben</h1>
						<h2>In geistiger Umnachtung (1889–1900)</h2>
	
						<ul>
							<li>Zusammenbruch in Turin am 3. Januar 1889</li>
							<li>Unterbringung in verschiedenen Anstalten</li>
							<li>Tod am 25. August 1900 in Weimar</li>
						</ul>
					</div>
				</Step>
			</Stack>
	
			<Notes>
				**Leben**
				Nietzsche wuchs in eben jenem frommen und beengten Milieu auf, 
				das er später in seinen Werken angriff.

				**Jugend (1844–1869)**
				Friedrich Nietzsche wurde am 15. Oktober 1844 in Röcken, Sachsen, geboren. 
				Bereits mit zehn Jahren verfasste er Gedichte und Kompositionen.
				Nach dem Tod seines Vaters im Jahr 1849 zog die Familie nach Naumburg. 
				Die Umstellung vom Land auf die Stadt bereitete Friedrich Wilhelm Nietzsche Schwierigkeiten.
				Dort besuchte er das Domgymnasium und lebte von 1850 bis 1856 im "Naumburger Frauenhaushalt".
				Er wurde erst in einer privaten Einrichtung unterrichtet und ging dann ab 1854 auf das Dom-Gymnasium in Naumburg.
				Dort zeigte sich schnell seine intellektuelle Begabung.
				Das Erbe seiner Großmutter ermöglichte ihm eine eigene Wohnung. 
				1858 wurde Nietzsche durch ein Stipendium in die Landesschule Pforta aufgenommen, wo er erste Freundschaften knüpfte. 
				Dieses genoss damals den Ruf als eines der bedeutendsten Bildungseinrichtungen Deutschlands.
				Dort entwickelte sich auch seine Vorstellung von der Antike und seine Distanz zur kleinbürgerlich-christlichen Welt.

				Gemeinsam mit seinen Freunden Pinder und Krug traf sich Nietzsche ab 1860 auf der Burgruine Schönburg, 
				wo er mit ihnen über Literatur, Philosophie, Musik und Sprache diskutierte. Mit ihnen gründete er dort die künstlerisch-literarische Vereinigung „Germania“. 
				Die Gründungsfeier fand am 25. Juli 1860 statt.
				Gedichte, Kompositionen, Abhandlungen mußten regelmäßig geliefert werden. 
				Man wollte dann gemeinsam darüber diskutieren.“ Die Versammlungen fanden vierteljährlich statt.
				Auf ihnen wurden Vorträge gehalten. Es gab eine Gemeinschaftskasse, aus der Bücher beschafft wurden. 
				Bereits in dieser Zeit entwickelte Nietzsche seine Leidenschaft für die Musik Richard Wagners. 
				Zu Nietzsches frühen Werken, die vor dem Hintergrund der Schönburger Germania entstanden sind, zählen die Synodenvorträge, 
				Kindheit der Völker, Fatum und Geschichte sowie Über das Dämonische in der Musik. 1863 wurde die Germania aufgelöst, 
				nachdem Pinder und Krug ihr Interesse daran verloren hatten.

				Sein Studium der klassischen Philologie begann er 1864 in Bonn.
				Bereits mit Mitte zwanzig erhält Nietzsche eine Professur für klassische Philologie in Basel. 
				In dieser Zeit beginnt auch eine intensive, aber letztlich scheiternde Freundschaft mit Richard Wagner. 
				Unter dessen Einfluss entsteht Nietzsches erstes bedeutendes Werk: 
				"Die Geburt der Tragödie aus dem Geiste der Musik" (1872).

				**Professor an der Universität Basel (1869–1879)**
				1869 wurde Nietzsche auf Empfehlung seines Lehrers Friedrich Ritschl 
				als außerordentlicher Professor für klassische Philologie an die Universität Basel berufen. 
				Zuvor war er noch preußischer Staatsbürger, nach seiner Übersiedlung in die Schweiz 1869 wurde er auf eigenen Wunsch hin staatenlos. 
				Seine Erkenntnis des quantitierenden Prinzips in der antiken Metrik war bedeutend.
				In dieser Zeit entwickelte sich seine Freundschaft mit Richard Wagner. 
				Ab 1871 verschlechterte sich sein Gesundheitszustand durch ein Augenleiden, das nicht nur mit viel Schmerzen verbunden war, 
				sondern auch mit fast vollständiger Erblindung.
				In dieser Zeit veröffentlichte er beispielsweise "Die Geburt der Tragödie" (1872).
				1873 lernte er Bertha Rohr kennen. Es ist nicht klar ob sie eine Beziehung hatten.

				**Freier Philosoph (1879–1889)**
				Nach seiner Pensionierung nur 10 Jahre später aufgrund gesundheitlicher Probleme 1879, reiste Nietzsche als freier Autor und lebte von seiner Pension. 
				Von nun an bereiste er – auf der Suche nach Orten, deren Klima sich günstig auf seine diversen Leiden auswirken sollte – vor allem Italien und die Schweiz. 
				Die Sommer verbrachte er in Sils Maria und die Winter in Italien.
				Er brach mit Wagner und Schopenhauer, knüpfte 1882 Bekanntschaft mit Lou von Salomé und veröffentlichte 1883 "Also sprach Zarathustra". 
				Nietzsche verliebte sich schließlich in Lou von Salomé. Salomé wies ihn jedoch ab. Lou von Salomé endete somit 1883.

				**In geistiger Umnachtung (1889–1900)**
				Nietzsche gesundheitliche Konstitution ist zeitlebens fragil, immer wieder quälen ihn heftige Migräneanfälle.
				Ab seinem 45. Lebensjahr (1889) litt er unter zunehmenden psychischen Störungen, die ihn arbeits- und geschäftsunfähig machten. 
				Die letzten 12 Jahre seines Lebens verbringt er in geistiger Umnachtung. 
				Seinen Anfang der 1890er Jahre einsetzenden Ruhm erlebte er nicht mehr bewusst. 
				Am 3. Januar 1889 erlitt Nietzsche einen Zusammenbruch in Turin. 
				Er wurde in verschiedenen Anstalten untergebracht. Er konnte kurze Gespräche führen, erkannte aber oft niemanden.
				Sein Gesundheitszustand verschlechterte sich weiter. 
				Den Rest seines Lebens verbrachte er als Pflegefall in der Obhut zunächst seiner Mutter, dann seiner Schwester
				in der Villa Silberblick in Weimar. 
				Er starb am 25. August 1900 stirbt er im Alter von 55 Jahren an Pneumonie und einem Schlaganfall.
				
				Die Vermutung, die Spätfolgen einer Syphilis könnten beim Krankheitsverlauf eine Rolle gespielt haben, hielt sich gut 100 Jahre. 
				Heute vermutet man, er habe CADASIL gehabt. 
				Das ist eine genetische Erkrankung, die zu familiär gehäuften Schlaganfällen im mittleren Lebensalter führen kann.

				Er hinterlässt ein sprachlich brillantes, oft widersprüchliches Werk, 
				das von den Nationalsozialisten vereinnahmt wurde, aber auch linke Theoretiker wie Michel Foucault beeinflusste.

				Seine Schwester Elisabeth Förster-Nietzsche übernahm die Kontrolle über seinen Nachlass.
			</Notes>
		</section>
	</Slide>

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
						<li>Philosophie: Heldentum, Selbstüberwindung.</li>
					</ul>
				</div>
				
				<Step>
					<div class="bg-[var(--r-background-color)] h-screen w-screen">
						<h1>Person</h1>
						<ul>
							<li>Interesse an allem außer Mathematik.</li>
							<li>Religion als Wissensgrund, Staat.</li>
							<li>Lehnte Evolutionstheorie ab.</li>
						</ul>
					</div>
				</Step>

				<Step>
					<div class="bg-[var(--r-background-color)] h-screen w-screen">
						<h1>Person</h1>
						<ul>
							<li>Kritik an gängigen Wertvorstellungen.</li>
							<li>Ideale wie Gleichheit, Mitleid subjektiv.</li>
							<li>Christlich-geprägte „Sklavenmoral“ schädlich.</li>
							<li>Bejahung des Lebens, Streben nach Exzellenz.</li>
							<li>„Übermensch“ in Zarathustra (1883–1885).</li>
							<li>Offen für unterschiedliche Interpretationen.</li>
							<li>„Herrenmensch“ vs. persönliche Vervollkommnung.</li>
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
							<li>Zeitgenössische Kultur lebensschwach.</li>
							<li>Wert der Wahrheit in Frage.</li>
							<li>Konzepte: „Übermensch“, „Willens zur Macht“.</li>
						</ul>
					</div>
				</Step>

				<Step>
					<div class="bg-[var(--r-background-color)] h-screen w-screen">
						<h1>Person</h1>
						<ul>
							<li>Keine systematische Philosophie.</li>
							<li>Aphorismen, Prosa, lyrischer Stil.</li>
							<li>Musikalische Kompositionen im Nebenwerk.</li>
						</ul>
					</div>
				</Step>
			</Stack>

			<Notes>
				Nietzsche verstand sich nicht gut mit seiner Familie. Frauen lehnten ihn ab.
				Er war ein Außenseiter, von schwächlicher Körpergestalt, ein Einzelgänger, der die Menschen mied und sich ungewandt in der Welt bewegt
				und sich nicht an die Normen seiner Zeit hielt.
				Er verfolgte eine Philosophie von Heldentum und Größe, von Selbstüberwindung. 
				
				Nietzsche interessierte sich für alles außer Mathematik.
				Die Religion war ihm die „Grundveste alles Wissens!“ und die „Grundlage des Staates“. 
				Die Evolutionstheorie lehnte er ab.

				In seinen Schriften wie etwa der Genealogie der Moral (1887) 
				kritisiert Nietzsche gängige Wertvorstellungen. 
				Für ihn haben Ideale wie Gleichheit oder Mitleid keine objektive Gültigkeit. 
				Vielmehr verändern Werte sich je nach historischer Situation und sind zudem Ausdruck 
				verschleierter psychologischer Bedürfnisse. 
				Die in der Moderne vorherrschende, christlich geprägte „Sklavenmoral“ ist 
				im Grunde durch Neid motiviert: 
				Weil man von seinen Mitmenschen nicht an Macht und Fähigkeiten übertroffen werden will, 
				fordert man Bescheidenheit, Nächstenliebe und dergleichen. 
				Letztlich aber, so Nietzsche, schaden diese Werte: Sie führen zu ständigen Schuldgefühlen 
				und sind lebensfeindlich. 
				Anstelle dieser heuchlerischen und schwächenden Kultur sollte eine umfassende Bejahung 
				des Lebens sowie ein Streben des Individuums nach Exzellenz treten. 
				In seinem bekanntesten Werk Also sprach Zarathustra (1883–1885) 
				entwickelt Nietzsche die umstrittene Idee des „Übermenschen“, 
				der alle menschlichen Schwächen überwunden hat. 
				Wie viele Gedanken Nietzsches ist auch der Übermensch offen für gegensätzliche Interpretationen. 
				Die Nationalsozialisten verstanden ihn als biologisch überlegenen „Herrenmenschen“, 
				während andere hier eine Aufforderung zu persönlicher Vervollkommnung sahen, 
				die sich an jeden richtet. 
				
				Nietzsche sprengte sowohl mit seinem Denken als auch mit seinem Stil bis dahin gängige Muster und ließ sich zunächst keiner klassischen Disziplin zuordnen. 
				Heute gilt er manchen als Begründer einer neuen philosophischen Schule, der Lebensphilosophie.
	
				Den jungen Nietzsche beeindruckte besonders die Philosophie Schopenhauers. 
				Später wandte er sich von dessen Pessimismus ab. Sein Werk enthält scharfe Kritiken an Moral, Religion, Philosophie, Wissenschaft und Formen der Kunst. 
				Die zeitgenössische Kultur war in seinen Augen lebensschwächer als die des antiken Griechenlands. 
				Wiederkehrendes Ziel von Nietzsches Angriffen sind vor allem die christliche Moral sowie die christliche und platonistische Metaphysik. 
				Er stellte den Wert der Wahrheit überhaupt in Frage und wurde damit Wegbereiter postmoderner philosophischer Ansätze. Auch Nietzsches Konzepte des „Übermenschen“, 
				des „Willens zur Macht“ oder der „ewigen Wiederkunft“ geben bis heute Anlass zu Deutungen und Diskussionen.
	
				Nietzsche schuf keine systematische Philosophie. Oft wählte er den Aphorismus als Ausdrucksform seiner Gedanken. 
				Seine Prosa, seine Gedichte und der pathetisch-lyrische Stil von Also sprach Zarathustra verschafften ihm auch als Schriftsteller Anerkennung. 
				Im Nebenwerk schuf er zudem musikalische Kompositionen.

				
				Nietzsche war ein scharfsichtiger Kritiker und ein Schriftsteller mit einem ungewöhnlichen Potenzial an Sprachschöpfungen. 
				Dadurch verschaffte er sich den Ruf als bedeutendster Aphoristiker und Essayist. 
				Der Zugang zu seinem Werk wird erschwert durch seine intellektuelle Vortragsform. 
				Besonders die Existenzialphilosophie orientierte sich an der Philosophie Nietzsches. 
				Die geistige Übernahme der Nationalsozialisten, besonders von der Vorstellung des Herrenmenschen, scheiterte daran, 
				dass Nietzsche sowohl Antisemitismus als auch den deutschen Nationalsozialismus rigoros ablehnte.
			</Notes>
		</section>
	</Slide>

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

			<Notes>
				Nietzsche drückt in seinen autobiographischen Aufzeichnungen tief empfundene Religiosität aus, indem er sich von Gott wie ein Kind von seinem Vater geleitet fühlt. 
				Die Beziehung zwischen Schopenhauer und dem Buddhismus beeinflusst auch Nietzsche, der sich in Briefen sogar mit Buddha identifiziert. 
				Seine Haltung zum Buddhismus ist ambivalent, von kritischer Analyse bis zur Integration buddhistischer Konzepte in seine Philosophie. 
				In verschiedenen Werken, nicht nur Briefen, zeigt Nietzsche seine Auseinandersetzung mit dem Buddhismus, wie etwa in einem Zitat aus "Die fröhliche Wissenschaft" von 1882. 
				Dies verdeutlicht die Vielschichtigkeit seiner Beziehung zu diesem Thema.

				"Die Praxis des Christenthums ist keine Phantasterei, so wenig die Praxis des Buddhismus sie ist: sie ist ein Mittel; glücklich zu sein …"
			</Notes>
		</section>
	</Slide>

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
			

			<Notes>
				Selbstüberwindung & Übermensch

				Nietzsches Ideal des Übermenschen war in vielen Aspekten das Gegenteil von ihm selbst. Diese Vorstellung führte nicht nur zu einem fiktiven Dasein, 
				sondern schuf auch einen Mythos seiner eigenen Person durch die Idee des Übermenschen.

				Unter dem Einfluss von Charles Darwins zeitgenössischer Selektionstheorie verbreitete Nietzsche die Philosophie des "Übermenschen", 
				die von den Nationalsozialisten übernommen werden sollte. In seinem Hauptwerk "Also sprach Zarathustra" erklärt Friedrich Wilhelm Nietzsche 
				die Phasen der menschlichen Entwicklung, die mit der Rückbesinnung auf eigene Werte enden.

				Sein Werk "Die Fröhliche Wissenschaft" (1882), das 1886 in seiner endgültigen Form vorlag, diente als Vorstufe zu seinem Hauptwerk 
				"Also sprach Zarathustra. Ein Buch für alle und Keinen" (erster Teil 1883). Dort beschreibt er die drei Entwicklungsstufen des Menschen, 
				die mit Abhängigkeit beginnen, sich zu erkämpfter Freiheit fortsetzen und in eigenen Werten enden. Ursprünglich sollte sein Hauptwerk 
				"Der Wille zur Macht" sein, jedoch kam die Arbeit über eine Vielzahl von Aphorismen und Notizen, die von seiner Schwester 
				Elisabeth Förster-Nietzsche herausgegeben wurden, nicht hinaus. Nietzsches philosophische Auffassung war stark von Darwins Selektionstheorie 
				und Schopenhauers Willensmetaphysik geprägt, die die Grundlage für seine Vorstellung vom Übermenschen bildeten, der alles Krankhafte auslöschen sollte.

				Für Nietzsche konkretisierte sich der Übermensch in den Herrenmenschen der Renaissance, wie zum Beispiel in Cesare Borgia. 
				Das Christentum machte er für eine "Sklavenmoral" verantwortlich, weswegen er es ablehnte. Die bürgerliche Moral bezeichnete er als verlogen, 
				und das Hohe sah er durch den Pöbel gefährdet. In seiner Metaphysik begründete Nietzsche alles Dasein 
				als eine durch den Machtwillen geschaffene Erscheinungsform. Das menschliche Dasein betrachtete er als eine "ewige Wiederkehr", 
				die unausweichlich ist. Aufgrund dieser Unausweichlichkeit riet er dazu, dem Schicksal zu folgen, da es keine andere Möglichkeit 
				für den Menschen gibt. In seiner Amor-fati-Formel liegt die freudige Anerkennung des bestehenden Daseins. 
				Nietzsche wehrte sich gegen spekulatives Denken, was auch seine eigentliche Bedeutung als Philosoph ausmacht. 
				Darüber hinaus erreichte er vor allem Geltung, indem er stets dafür plädierte, das Denken in das Leben einzubeziehen.

				**Neid:**
				- Nietzsche akzeptiert Neid als Teil des Lebens
				- Neid als Ansporn, um zu werden, was man wirklich will
				- Neid als Anzeichen für Potenzial, nicht als Böses

				**Christen:**
				- Kritik am Christentum, besonders der Sklavenmoral
				- Christen (Heerde) wollen Erfüllung, sind aber unfähig, sie zu erreichen
				- Christliche Werte als Leugnung und Heuchelei
				- Nietzsche fordert einen heroischen Kampf für wahre Wünsche

				Er lehnte das Christentum ab mit der Begründung, dass es eine "Sklavenmoral" schaffe. Nietzsches Bedeutung liegt darin, 
				dass er das spekulative Denken ablehnte und das Denken überhaupt in das Leben einbezog. 
				Er war ein glänzender Essayist und einer der bedeutendsten Aphoristiker, der außerordentliche Sprachschöpfungen schuf...
				
				**Alkohol:**
				- Nietzsche trank nur Wasser und Milch
				- Abneigung gegen Alkohol und Christentum wegen Betäubung von Schmerzen
				- Wichtige Dinge erfordern Schmerz und Anstrengung

				**Schlussfolgerung:**
				- "Gott ist tot" als kritische Aussage, nicht zum Feiern
				- Religiöser Glaube als falsch, aber hilfreich für Probleme
				- Lücke ohne Religion sollte durch Kultur (Philosophie, Kunst) gefüllt werden
				- Skepsis gegenüber der Handhabung von Kultur in seiner Epoche
				- Forderung nach Reformation, Nutzung von Philosophie und Kunst als Anleitung zum Leben
				- Nietzsche als reizender, faszinierender Ratgeber, trotz Herausforderungen seiner Zeit

				Nietzsche findet, dass Universitäten schlecht für uns Menschen sind, trockene akademische Übung, keine Anleitung zum Leben.

				"Es gab zwei große Betäubungsmittel in der europäischen Zivilisation: das Christentum und Alkohol."
				Beide betäuben Schmerz und sorgen dafür, dass man sich zwar besser fühlt, aber nicht wirklich besser ist.
			</Notes>
		</section>
	</Slide>
	
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
					<td>Aphorismen, Abwendung vom romantischen Denken</td>
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

			<Notes>
				Nietzsches Werke sind leicht zu lesen. Man braucht keine philosophische Vorbildung, um sie zu verstehen.
				1872 erschien seine erste Veröffentlichung "Die Geburt der Tragödie aus dem Geist der Musik", 
				die vor den Augen seines Lehrers Ritschl kein gutes Urteil erhielt.

				Interessante Aspekte:
				Die Geburt der Tragödie (1872):
				In diesem Werk reflektiert Nietzsche über den Einfluss der antiken griechischen Tragödie auf die Kultur.
				Er präsentiert den Konflikt zwischen dem Apollinischen (ordnenden Prinzip) und dem Dionysischen (chaotisches, kreatives Prinzip).

				Menschliches, Allzumenschliches (1878):
				Hier wendet sich Nietzsche von romantischen Ideen ab und präsentiert Aphorismen, kurze und prägnante Gedanken zu verschiedenen Themen des menschlichen Lebens.
				
				Die fröhliche Wissenschaft (1882):
				Nietzsche verkündet hier den "Tod Gottes" und stellt das Konzept des Übermenschen vor, der über traditionelle moralische Vorstellungen hinausgeht.
				
				Also sprach Zarathustra (1883-1885):
				In diesem philosophischen Werk verkündet der Protagonist Zarathustra Ideen wie den Übermenschen und die Ewige Wiederkunft.
				
				Jenseits von Gut und Böse (1886):
				Nietzsche untersucht hier die Natur von Moral und präsentiert die Ideen der "Master-Slave-Moral" sowie den Perspektivismus, der betont, dass es keine objektive Realität gibt.
				
				Zur Genealogie der Moral (1887):
				Das Werk erforscht die Herkunft von moralischen Werten und betrachtet insbesondere die Entstehung der Sklavenmoral und ihre Auswirkungen auf die Gesellschaft.
			</Notes>
		</section>
	</Slide>

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

			<Notes>
				Nietzsche verfasste einige provokative Äußerungen und einige Zitate möchte ich euch jetzt gerne vorlesen:
				
				"Was mich nicht umbringt, macht mich stärker."<br><br>
				"Wie wenig ihr vom Glück der Menschen wisst - ihr bequemen Leute! Das Geheimnis eines erfüllten Lebens liegt darin, gefährlich zu leben!"<br><br>
				"Gott ist tot! Und wir haben ihn getötet."<br><br>
				"Ich mag meine Mutter nicht, und es schmerzt mich, die Stimme meiner Schwestern zu hören."
			</Notes>
		</section>
	</Slide>

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
						class="w-auto h-[60vh]"
						src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Friederich_Nietzsche.jpg"
						alt="Friedrich_Nietzsche"
						type="img"
					/>
	
					<Step>
						<Media
							class="w-auto h-[60vh]"
							src="https://upload.wikimedia.org/wikipedia/commons/4/44/K%C3%B6selitz-Nietzsche.jpg"
							alt="Friedrich_Nietzsche"
							type="img"
						/>
					</Step>

					<Step>
						<Media
							class="w-auto h-[60vh]"
							src="https://upload.wikimedia.org/wikipedia/commons/9/90/Stamp_Germany_2000_MiNr2131_Friedrich_Nietzsche.jpg"
							alt="Friedrich_Nietzsche"
							type="img"
						/>
					</Step>
				</Stack>
			</Split>

			<Notes>
				Musik: Nach Texten von Friedrich Nietzsche wurden einige Kompositionen geschaffen. Er komponierte auch selber.
				Belletristik (Unterhaltungsliteratur), Filme, Hörspiele, Porträts und Skulpturen: darunter Totenmasken und Büste
				sowie mehr als zehn Fotografien zwischen 1862 und 1900.
				Auch Briefmarken wurden ihm gewidmet. Und es gibt einige Gedenkstätten.

				Auch ein Denkmal wurde ihm gewidmet. Es steht in Naumburg.

				Und in der Fernsehserie Andromeda gibt es eine Rasse, die nach ihm benannt wurde.
				Menschen die genetisch manipuliert wurden, um die perfekte Rasse zu erschaffen.
				Sie sollten lebende Götter sein.
				Sie sind größer, stärker, schneller und immun gegen Gifte und Krankheiten sowie wesentlich widerstandsfähiger gegenüber allen Umweltbedingungen.
				Die Nietzscheaner hängen den Lehren des deutschen Philosophen Friedrich Nietzsche an.
			</Notes>
		</section>
	</Slide>

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


			<Notes>
				Therese Elisabeth Alexandra Nietzsche (* 10. Juli 1846 in Röcken; † 8. November 1935 in Weimar), bekannt als Elisabeth Förster-Nietzsche, 
				war die Schwester des Philosophen Friedrich Nietzsche. Als alleinige Nachlassverwalterin ihres Bruders und Gründerin und Leiterin des Weimarer 
				„Nietzsche-Archivs“ nahm sie in der ersten Hälfte des 20. Jahrhunderts erheblichen Einfluss auf den Nietzsche-Kult in Deutschland.
	
				Nach dem Zweiten Weltkrieg wurden ihre Fälschungen an Nietzsches Schriften und Briefen bekannt. Sie wird für bestimmte Deutungen der Philosophie ihres Bruders, 
				besonders jene im Nationalsozialismus, verantwortlich gemacht und kritisiert. Das von ihr verbreitete Nietzsche-Bild kam 
				jedoch dem damaligen Zeitgeist entgegen und wurde von zahlreichen Gelehrten und Literaten weitgehend geteilt.
				Vermutlich entpuppten sich die Fälschungen als nicht echt, weil sie nicht mehr in den Zeitgeist nach dem 2. Weltkrieg passten.
			</Notes>
		</section>
	</Slide>

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

			<Notes>
				Quellenhölle: Eine Quelle sagt dies, eine sagt das. Ich liebe es zu recherchieren :/.
			</Notes>
		</section>
	</Slide>

	<Slide animate transition={'slide'}>
		<section>
			<span class="prose prose-slide dark:prose-invert">
				<h1 class="block mx-auto">Made with <a href="https://kit.svelte.dev">SvelteKit</a> :&rpar; </h1>
			</span>

			<Icon class="block mx-auto mt-4" width={"250px"} icon="logos:svelte-icon"/>
		</section>
	</Slide>
</Presentation>
