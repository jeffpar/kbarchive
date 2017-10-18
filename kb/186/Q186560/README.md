---
layout: page
title: "Q186560: Using DOSKBD to Modify MS-DOS Keyboard Polling Detection"
permalink: kb/186/Q186560/
---

## Q186560: Using DOSKBD to Modify MS-DOS Keyboard Polling Detection

	Article: Q186560
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Standard MS-DOS applications will use nearly 100 percent of the system CPU
	because they constantly look for keyboard input, whether the application is
	active (checking for keyboard input to be more responsive) or idle. Obviously,
	no application should be allowed to monopolize the CPU. In a Terminal Server
	environment, keyboard polling can make an MS-DOS application sluggish for a
	single user, or can seriously limit the number of simultaneous users.
	
	MORE INFORMATION
	================
	
	There are two ways to modify an application's keyboard polling. The first is to
	modify the application's properties, and the second is to use the MS- DOS
	utility, DOSKBD.
	
	Determining that a Problem Exists
	---------------------------------
	
	Application performance problems will be obvious to the user, but to get a more
	precise picture of application resource use, use Performance Monitor. If you
	suspect an MS-DOS application is monopolizing the CPU, Performance Monitor can
	tell you precisely how much CPU time the application is using. To avoid false
	readings, make sure that Terminal Server is running as few system-processes as
	possible. Run only Performance Monitor and a single client connection from which
	to run the MS-DOS application.
	
	In Performance Monitor, open a graph that displays total system CPU usage, every
	second. Note the CPU usage before you have the client run the MS-DOS
	application. This will give you a baseline.
	
	Now have the client run the MS-DOS application and note the increased CPU usage.
	
	Lowering CPU Usage through Application Properties
	-------------------------------------------------
	
	Have the client close the MS-DOS application. At the Terminal Server, run Windows
	NT Explorer, and highlight the application's executable file. Right- click this
	file and select Properties from the popup list. On the Properties Screen, select
	MISC (miscellaneous). You will find a slider bar called Idle Sensitivity. This
	setting tells the system how much CPU time to allow the application to use while
	it is idle. Low sensitivity allows the application to use more CPU time. High
	sensitivity reduces allowable CPU time. In this case, you want to increase
	sensitivity. Every application will be different, so determining the correct
	sensitivity level will necessitate some trial and error.
	
	NOTE: If you are familiar with Citrix Winframe, you may have used the PIF Editor
	to modify an MS-DOS application's properties. Terminal Server uses the Windows
	NT 4.0 method: right-click the application name in Windows NT Explorer, and open
	the application's Properties. Whenever properties are changed, an application
	shortcut is created. You can place this shortcut on the user's desktop, folder,
	or START Menu. Launching the application from the shortcut activates the
	properties you select. However, running the application's executable from a
	command line will not activate the properties you select.
	
	After you modify the application properties and exit the Properties screen, a
	shortcut will be created with a default name identical to the application
	executable name. Use this shortcut to start the application. You can modify the
	shortcut name if you want to create multiple instances with different
	properties.
	
	Have the client run this shortcut while you monitor Performance Monitor for
	decreased CPU use.
	
	NOTE: Modifying the application properties affects ONLY idle time. It does not
	decrease CPU use while the application is active (for example, when the user is
	typing).
	
	The DOSKBD Utility
	------------------
	
	The DOSKBD utility can decrease an MS-DOS application's CPU usage from keyboard
	polling during active and idle times. It is also much more complex than simply
	modifying the application properties. What is also much more complex?
	
	DOSKBD works by monitoring how frequently the MS-DOS application checks the
	keyboard buffer for input. If it checks too frequently during a specific
	interval (by default, a single system timer tick), the application is suspended,
	or put to sleep, for a short period of time.
	
	The default values for DOSKBD are in effect whenever an MS-DOS application is
	started. The defaults, switches, and usage are detailed below. If you need to
	modify any of the default values, run DOSKBD with the new values from the same
	command prompt (or within the same MS-DOS session) that you use to run the
	application. The easiest way to accomplish this is to create a batch file that
	runs DOSKBD with the appropriate settings and then runs the application. An
	alternative to using a batch file is to create a custom autoexec.nt file and
	associate it with the MS-DOS application's shortcut properties.
	
	By using batch files to run your MS-DOS applications, you can set different
	values for DOSKBD as needed.
	
	These are the default values for DOSKBD. These are the values in effect, whenever
	an MS-DOS window is opened.
	
	- Number of milliseconds in a system timer tick is 10
	
	- DetectionInterval = 1 tick(s) (10 msec)
	
	- DetectProbationCount= 80
	
	- InProbationCount= 35
	
	- msAllowed= 0
	
	- msSleep= 100
	
	- BusymsAllowed= 60
	
	- msProbationTrial= 2500
	
	- msGoodProbationEnd= 2500
	
	The poll detection algorithm is driven by how many keyboard polls happen within a
	polling detection interval. All units of time are rounded to a system timer
	tick. If too many keyboard polls occur within a detection interval, the
	application is put on probation and punished by being put to sleep for a
	predetermined amount of time. When the application is on probation, the
	algorithm can be set up to punish the application after a fewer number of
	polls.
	
	Activities such as updating the screen, doing file I/O, or getting mouse or
	keyboard activity cause the system to mark the application as busy. When the
	application is determined to be busy, it is awakened if it is being punished. In
	addition, the application is taken off probation.
	
	If an application polls DetectProbationCount number of times within a given timer
	tick, the application is put into probation if BusymsAllowed number of
	milliseconds have elapsed since the last time the application was detected as
	busy. When the application is put into probation for msAllowed milliseconds, it
	is punished for exceeding the allowed number of polls within a timer tick by
	being put to sleep for msSleep number of milliseconds.
	
	While the application is on probation, the number of allowed polls is reduced to
	InProbationCount from DetectProbationCount. After exceeding the allowed number
	of polls, it is put to sleep as long as msAllowed milliseconds have elapsed
	since the application probation.
	
	The application is taken off probation if msGoodProbationEnd milliseconds have
	elapsed since the application was last punished. In addition, every
	msProbationTrial milliseconds, the allowed number of polls in a timer tick is
	increased to DetectProbationCount. As long as the application is not punished,
	the allowed number of polls stays at the higher level. If the application
	exceeds that level, the allowed level of polls is reduced to InProbationCount.
	
	DOSKBD Command-Line Switches, Syntax, and Values
	------------------------------------------------
	
	At a command prompt, type DOSKBD /? to display how to use DOSKBD. To display the
	current settings, type DOSKBD. The number of milliseconds in a system timer tick
	is also displayed.
	
	  DOSKBD
	
	  DOSKBD /DEFAULTS [/Q]
	
	  DOSKBD [/DETECTPROBATIONCOUNT:nnn] [/INPROBATIONCOUNT:nnn]
	
	     [/MSALLOWED:nnn]
	
	  [/MSSLEEP:nnn] [/BUSYMSALLOWED:nnn] [/MSPROBATIONTRIAL:nnn]
	  [/MSGOODPROBATIONEND:nnn] [/DETECTIONINTERVAL:nnn] [/STARTMONITOR
	
	     [appname]
	
	  | /STOPMONITOR] [/Q]
	
	  DOSKBD displays the current settings.
	
	  DOSKBD /DEFAULTS resets all tuning parameters to the system defaults.
	
	  Any DOSKBD command line ending with /Q will not display any information.
	
	  NOTE: Valid range for all values (represented by nnn) is 0 to 32767.
	
	  /DETECTPROBATIONCOUNT:nnn
	
	  The number of peeks in the detection interval required to force the
	  application into the probation state and to sleep the application.
	
	  /INPROBATIONCOUNT:nnn
	
	  The number of peeks in the detection interval required to sleep the
	  application when the application is in probation. Should be <=
	  DETECTPROBATIONCOUNT.
	
	  /MSALLOWED:nnn
	
	  The number of milliseconds the application is allowed to be in the
	  probation state before the system starts sleeping the application.
	
	  /MSSLEEP:nnn
	
	  The number of milliseconds that the application is put to sleep.
	
	  /BUSYMSALLOWED:nnn
	
	  When the application is detected as 'busy', the application cannot be
	  put into the probation state for this # of milliseconds.
	
	  /MSPROBATIONTRIAL:nnn
	
	  When the application is in probation, DETECTPROBATIONCOUNT is used
	  instead of INPROBATIONCOUNT every MSPROBATIONTRIAL milliseconds.
	
	  /MSGOODPROBATIONEND:nnn
	
	  When the application is in probation it must avoid being put to sleep
	  for this # of milliseconds in order to be removed from probation.
	
	  /DETECTIONINTERVAL:nnn
	
	  The length of time (in ticks) used to count up the number of polling
	  events.
	
	  /STARTMONITOR [appname]
	
	  Start gathering polling statistics.
	
	  /STOPMONITOR
	
	  Stop gathering polling information and display statistics.
	
	How to Use DOSKBD
	-----------------
	
	The typical scenario (typical scenario for what?) is that an MS-DOS application
	runs fine for a single user, but the system slows down when more users start
	using the application. When the system slows in this way, it is possible that
	the polling detection is not being aggressive enough to put the application into
	probation. Observe how much CPU the application is using while doing nothing,
	and while doing common operations. Then exit the application and use DOSKBD to
	refine the polling parameters. Remember that DOSKBD settings affect only the
	MS-DOS session in which they are set, so it is advisable that you modify your
	DOSKBD settings and run the MS-DOS application within a batch file, or through
	the use of a custom autoexec.nt file.
	
	Changing parameters by about 30 percent per try is recommended.
	
	To more aggressively take the CPU away from the application, first try decreasing
	DetectProbationCount and InProbationCount.
	
	If that does not help or does not help enough, try lowering BusymsAllowed by 10
	milliseconds per try. The default of msAllowed is already 0 (zero). If polling
	is being detected, the CPU should be significantly less than 100 percent by
	now.
	
	At this point it is important to make sure that the application is still Able to
	respond in all the ways that it will be used. If it is not responsive, you have
	gone too far, and you must back off some of the settings. To further reduce the
	CPU used, msSleep can be increased. Use caution while increasing msSleep,
	because some applications become unresponsive or jerky if this value is
	increased too much.
	
	As you reduce the amount of CPU that the application is using, while ensuring
	that the application is still responsive, the system should be able to support a
	greater number of concurrent users.
	
	Some applications may use close to 100 percent CPU, regardless of how aggressive
	you make the polling detection. Keyboard polling is a common problem, but
	applications may monopolize the CPU in other ways.
	
	If an application is not getting enough CPU, the polling detection is probably
	too aggressive, or the application needs more time to run before it is punished.
	You can increase DetectProbationCount and InProbationCount to lengthen the time
	it takes to detect that the application is polling. You can increase msAllowed
	from zero to give the application additional execution time, before it is
	punished for being on probation. You can also give the application more CPU
	while it is being punished by reducing the value of msSleep.
	
	All these possibilities increase the amount of CPU that the application gets,
	which reduces the number of users who can simultaneously do useful work on the
	system.
	
	NOTE: DOSKBD is used only for MS-DOS applications. However, Windows applications
	may also monopolize the CPU by checking the message queue too frequently. This
	behavior can be modified through the system registry. See the article
	Performance Tuning CPU Usage for 16-bit and 32-bit Windows Applications for more
	information.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
