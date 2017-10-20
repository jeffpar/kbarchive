---
layout: page
title: "Q172455: ExitFox.exe Overcomes &quot;Cannot Quit Visual FoxPro&quot; Error"
permalink: /kb/172/Q172455/
---

## Q172455: ExitFox.exe Overcomes &quot;Cannot Quit Visual FoxPro&quot; Error

{% raw %}

	Article: Q172455
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbfile kbsample kbnokeyword kbvfp300 kbvfp500 kbvfp600
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Exitfox.exe is a sample that illustrates some situations where the "Cannot Quit
	Visual FoxPro" error message might appear and how to overcome this error
	message.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  ExitFox.exe
	  (http://download.microsoft.com/download/vfox60/Sample/1/W9X/EN-US/ExitFox.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	There are two common reasons why the "Cannot Quit Visual FoxPro" error message
	may be encountered. The first is that there is a READ EVENTS active when the
	QUIT command is issued. The second is that there is a modal form(s) active when
	the QUIT command is issued.
	
	In Visual FoxPro 3.x, the QUIT command would cut through a modal form(s) and a
	READ EVENTS to exit an executable. Although the error could still be encountered
	if, for instance, the application's CloseBox is clicked when a READ EVENTS is in
	effect. In Visual FoxPro 5.x or 6.x, the QUIT command will not cut through
	either a modal form or a READ EVENTS.
	
	The sample files contained in this article both illustrate some possible
	scenarios where the error message may be encountered and a way around it. Visual
	FoxPro 5.0, 6.0 or the professional version of Visual FoxPro 3.0 or both are
	needed to work with these files. Although Visual FoxPro 3.0 users won't likely
	run into the error message in the situations that are illustrated herein. The
	Visual FoxPro runtime libraries are not included with the sample files. To run
	the executable files, the runtime libraries must be present. The steps below
	will assume that Visual FoxPro 5.0 or 6.0, including the support library, are on
	the computer in use.
	
	To use the sample files, follow these steps.
	
	1. Place the ExitFox.exe self-extracting executable file in a new folder and
	  double click it to extract the files. ExitFox.exe contains the following
	  files:
	
	  quitfox6.pjx
	  quitfox6.pjt        These are the Visual FoxPro 5.x project files.
	
	  quitfox5.pjx
	  quitfox5.pjt        These are the Visual FoxPro 5.x project files.
	
	  quitfox3.pjx
	  quitfox3.pjt        These are the Visual FoxPro 3.x project files.
	
	  quitfox6.exe        Sample custom exe file - Visual FoxPro 6.x.
	  quitfox5.exe        Sample custom exe file - Visual FoxPro 5.x.
	  quitfox3.exe        Sample custom exe file - Visual FoxPro 3.x.
	
	  quitfox6.mnx
	  quitfox6.mnt        The menu files for the VFP 6.0 project.
	
	  quitfox6.prg        The main program for the VFP 6.0 project.
	
	  The Visual FoxPro 3.x and 5.x project share the following files:
	
	  quitfox.prg         The main program in both projects.
	
	  quitfox35.mnx
	  quitfox35.mnt       The menu files for each project.
	
	  All projects share the following files:
	
	  quitfox.scx
	  quitfox.sct         The first modal form in each project.
	
	  quitfox2.scx
	  quitfox2.sct        The second modal form in each project.
	
	  The forms are common to each project. You need to recompile the forms in
	  Visual FoxPro version 3.x before they can be opened. The menu file format was
	  changed between versions 5.x and 6.x so there are different vesions of the
	  menu and the main program that runs the menu for the Visual FoxPro 6.x versus
	  the Visual FoxPro 3.x and 5.x versions. There are no version-specific
	  settings or code in any of the projects. Changes in file formats have
	  necessitated the different copies of the project and menu files. The
	  executables can be rebuilt in each version of Visual FoxPro as desired. Just
	  open the project file for the version in use. Using the same files in both
	  projects will illustrate the difference in behavior between version 3.0,
	  version 5.0 and version 6.0.
	
	2. Run the QuitFox.exe file. It should display the Visual FoxPro screen with a
	  menu containing the Quit and Do Modal Form commands.
	
	3. Try to close the application with the CloseBox in the upper-right corner. The
	  "Cannot Quit Visual FoxPro" error message should appear. This occurs because
	  there is a READ EVENTS in effect. The same behavior happens in QuitFox3.exe.
	  You can use the Quit menu command or F11 to exit the application. Or, if you
	  want to allow the application to be shutdown with the CloseBox, choose the
	  AllowCloseBoxExit menu option. It issues an ON SHUTDOWN CLEAR EVENTS command.
	  Instead of issuing this in a menu option, it could be placed at the beginning
	  of the main program in the project. Then the CloseBox could be used to exit
	  the application without choosing the menu option. This can be disabled by
	  setting the Closable property of _Screen to .F. as is done in the Do Modal
	  Form menu option. _Screen is made closable again in the Destroy method of
	  Modal Form #1. This is where the similarities in quitting the two
	  applications will end.
	
	4. Now choose the Do Modal Form menu option. Modal Form #1 should appear. It can
	  be closed with the CloseBox or the Close Form button. However, try the Quit
	  FoxPro button. The "Cannot Quit Visual FoxPro" error should appear. If you
	  are running QuitFox3.exe, this will exit the application.
	
	5. Next choose the Do Another Modal Form button. Modal Form #2 should appear.
	  Try closing it with the Quit FoxPro button. In quitfox3.exe, this will end
	  the application. Here in quitfox.exe it produces the error message. Now try
	  the Hide Modal Forms & Quit button. This hides the modal forms, which
	  makes them modeless, so the QUIT command will then work. The form can be
	  closed with the CloseBox in the top right corner if quitting is not desired.
	
	6. With Modal Form #1 active, increase the value in the spinner control to 5.
	  There is a timer control on this form. The Interval property is initially set
	  to zero to disable it. With the spinner's value set to 5, click on the Set
	  Timer Interval To Spinner Value button. The timer will now fire in 5 seconds.
	  The timer calls a procedure in the main program that releases all open forms
	  and does a CLEAR EVENTS. The application should now disappear after waiting 5
	  seconds. As a further test, the second modal form can be displayed before the
	  timer fires. The application will still quit. Although not needed in a Visual
	  FoxPro 3.x executable, this method works there too.
	
	7. Open the source files, and examine the code and settings.
	
	The technique employed here could easily be modified for a multi-user setup where
	a table on a server holds a value that determines if the application should be
	ended. The procedure that the timer calls would go out and check that value and
	determine whether or not to end the application. An administrator could set the
	value at night, for instance, to log out any users who left for the day with the
	application running. Once all the users are logged out, the administrator could
	open the application's tables exclusively and PACK, REINDEX or change their
	structure.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbfile kbsample kbnokeyword kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
