---
layout: page
title: "Q166714: XCLN: Using AppleScript for Drag-and-Drop Support on Macintosh"
permalink: kb/166/Q166714/
---

## Q166714: XCLN: Using AppleScript for Drag-and-Drop Support on Macintosh

	Article: Q166714
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbcode kbusage
	Last Modified: 23-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Macintosh client does not support drag-and-drop
	functionality from the operating system to an Open Compose message or folder.
	However, there is limited support for attaching files to a New Compose message.
	Using AppleScript, you can create a script that prompts for a file and allows
	you to open the Exchange Macintosh client, open the New Compose message window,
	and attach the selected file.
	
	NOTE: AppleScript is included with the Macintosh operating system; if it is not
	present, re-install the operating system to add AppleScript.
	
	MORE INFORMATION
	================
	
	NOTE: This AppleScript requires System 7.5 or later to function correctly.
	
	Apple Events allows you to automate certain actions and save them as scripts.
	These AppleScripts (similar to a macro) work with any application that is
	scriptable. The Exchange Macintosh client is ONLY scriptable in the following
	manner.
	
	To create the script:
	
	1. Open the Apple Script Editor, usually located on the computer's local hard
	  disk drive, in the AppleScript folder within the Apple Extras folder.
	
	2. In the script window at the bottom of the Apple Script Editor, type the
	  following:
	
	        on run
	           set file1 to choose file
	           tell application "Microsoft Exchange & Schedule+"
	              open file1
	           end tell
	        end run
	
	  The script above applies to Microsoft Exchange Macintosh client version 5.0.
	  For Microsoft Exchange Macintosh client version 4.0, change the third line
	  to:
	
	           tell application "Microsoft Exchange"
	
	3. Click Check Syntax; there should be no errors reported. You must correct any
	  syntax errors before you continue.
	
	4. On the File menu, click Save As. Select a location for the script to be
	  saved; remember this location. Under Kind, select Application, and then
	  select Never Show Startup Screen.
	
	5. Save the script with the following name, Exchopendoc, in your chosen
	  location.
	
	You can now double-click the saved script to test it. A Chooser window is
	displayed that allows you to select a file to attach.
	
	The Exchange Macintosh client starts using the default profile; you are prompted
	for your user name and password information. After this information is
	validated, Exchange Macintosh client opens a new message window and attaches the
	selected file. Upon sending or closing the new message, Exchange Macintosh
	client closes and the script finishes.
	
	NOTE: Use this script when Exchange Server is running. If Exchange Server is not
	running, nothing happens and no errors are reported.
	
	NOTE: If the Exchange application is hidden, the new compose message also appears
	hidden. The new compose message only appears if you unhide the Exchange
	application.
	
	You can use this script to create a macro in Microsoft Word to call the script.
	After you create the macro it can appear as a toolbar button or menu command.
	Here is an example of a Word macro:
	
	           Sub MAIN
	     MacScript("exchopendoc")
	     End Sub
	
	NOTE: The macro does not attach the current open Word document. You must save and
	then select the current document when you use the macro with Word.
	
	You can also use this script to make an alias to the AppleScript file and place
	the alias file in your Apple Menu Items folder in the System folder. This allows
	the script to be called from anywhere within the Macintosh operating system.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbusage 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbExchange500Mac kbExchange400Mac
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
