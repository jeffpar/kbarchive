---
layout: page
title: "Q196733: HOWTO: Printing to a AppleShare IP 6.0 Secure Print Queue Fails"
permalink: /kb/196/Q196733/
---

## Q196733: HOWTO: Printing to a AppleShare IP 6.0 Secure Print Queue Fails

	Article: Q196733
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Printing PostScript from Windows NT to an AppleShare IP 6.0 secure print queue
	may fail if Enable Security is turned on for that queue by using the AppleShare
	IP Print Admin.
	
	MORE INFORMATION
	================
	
	Windows NT does not pass user information to a PostScript device automatically.
	A separator page has to be created to provide this functionality. When an
	AppleShare IP Print Admin checks the Enable Security option for an AppleShare IP
	6.x print queue, the Windows NT client must use a separator page to pass the
	user name.
	
	Follow these steps to create a separator page for Windows NT clients to print to
	the AppleShare Print Queue. Please check with your AppleShare IP Print
	administrator to verify that "Require Password for Printing" is off and "Enable
	Security" is on, and then follow the steps below. Otherwise, go to the note
	section below.
	
	1. On the Windows NT computer, open a text editor such as Notepad.
	
	2. Insert the following text without the space above and below into Notepad.
	
	        @
	        @L%!PS
	        @L%%For: (@N@L)
	
	  NOTE: Press ENTER after typing the last line of text.
	
	3. Save the Notepad file to the %Windir%\System32 directory with an .sep
	  extension (for example, psname.sep).
	
	4. Apply the separator page to a particular printer.
	
	5. Go to Start menu and choose Settings and select Printers.
	
	6. Select the PostScript printer name that points to the AppleShare IP print
	  queue; right-click and choose Properties.
	
	7. Select the Separator Page button and choose Browse to locate the Psname.sep
	  file located in %Windir%\System32.
	
	8. Select OK to close the Browse dialog box.
	
	9. Select OK to close the Separator Page dialog box.
	
	10 Select OK to close the Printer Properties dialog box.
	
	NOTE: This does not handle the issue of embedded PJL commands. Make sure the
	printer has a PS error handler installed so you can catch any PostScript errors
	that may occur. Also note that if "Require Password for Printing" is selected on
	the AppleShare server, there is no mechanism for the AppleShare IP print queue
	to accept a password by using this functionality; this functionality does not
	exist because of password encryption issues and security.
	
	For further information about AppleShare IP 6.x Printing and security questions,
	please contact your local Apple dealer. This article only applies to PostScript
	printing. For additional information about separator pages in Windows NT, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q102712 How to Create Custom Separator Page Files
	
	Additional query words: MacIP Pscript SFM
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : WinNT:3.1,3.5,3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
