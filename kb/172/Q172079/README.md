---
layout: page
title: "Q172079: HOWTO: Closing a Running Application from Visual FoxPro for Mac"
permalink: /kb/172/Q172079/
---

## Q172079: HOWTO: Closing a Running Application from Visual FoxPro for Mac

{% raw %}

	Article: Q172079
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbcode kbHWMAC kbvfp
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under certain circumstances, you may wish to determine which applications are
	running and if a particular application is running, perform an action such as
	causing the application to quit.
	
	This can be accomplished within Visual FoxPro for Macintosh by calling an
	AppleScript.
	
	MORE INFORMATION
	================
	
	Writing AppleScripts requires the AppleScript Script Editor. This can be
	downloaded from Apple's Web page at http://applescript.apple.com/sw.html. There
	is a Download hypertext jump that will download a compressed .hqx file
	containing the AppleScript Script Editor. It is also included on many System
	Software CDs in the Apple Extras folder.
	
	You can find information on writing AppleScripts in "Danny Goodman's AppleScript
	Handbook," 2nd edition, published by Random House.
	
	Steps to Create and Run the Script
	----------------------------------
	
	1. Paste or type the text below into the AppleScript Script Editor. This has
	  been tested with Mac OS versions 7.5.5 and 8.0.
	
	        -- Start of script code. The "--" string is a comment indicator
	
	        on run (tcAppName)
	          set lcNoParameter to "No parameter given as application to close."
	          set lcEmptyParameter to "No application specified to close."
	          -- Check for missing parameter or incorrect data type
	          try
	            set tcAppName to tcAppName as string
	            on error errmsg number errnum
	            if errnum = -1700 then
	              display dialog lcNoParameter
	              return
	            end if
	          end try
	
	        -- Check for empty parameter string
	        if tcAppName = "" then
	             display dialog lcEmptyParameter
	             return
	          else
	          -- Store passed app name to variable
	             set cAppName to tcAppName
	        end if
	
	        tell application "Finder"
	          -- Create list of running applications - these are object data
	          set lstResult to name of every process
	        end tell
	
	        -- Loop thru all open apps
	        repeat with oAppObj in lstResult
	          -- Check if name matches parameter passed to script
	          if (oAppObj as string) is cAppName then
	            -- If so, activate, which will cause app to prompt for save,
	            -- then quit.
	            tell application cAppName
	              activate
	            -- Use try then on error to trap for Cancel from Save dialog
	               try
	                 with timeout of 10 seconds
	                   quit
	                 end timeout
	               on error errmsg number errnum
	               end try
	             end tell
	           end if
	         end repeat
	        end run
	
	        -- End of script code
	
	2. Save the script as "KillAppIfRunning," and as a script or an application.
	  Spaces in the script file name may cause problems calling the script from
	  Visual FoxPro, so do not include spaces. Spaces in the path to the folder are
	  okay.
	
	3. Calling the script from Visual FoxPro as follows will close Microsoft Word if
	  it is running. This assumes that the script has been saved as
	  KillAppIfRunning and is located in the "MACINTOSH HD:APPLE'S SCRIPTING
	  SYSTEM:" folder.
	
	        RUNSCRIPT "MACINTOSH HD:APPLE'S SCRIPTING SYSTEM:KillAppIfRunning"
	           with "Microsoft Word"
	
	Notes
	-----
	
	1. If you forget to pass a parameter or pass an empty string, the script will
	  display an error message. The application name parameter is not case
	  sensitive.
	
	2. If the script cannot find the application you pass it (that is, it is not
	  running), the script will complete without error.
	
	3. It is necessary to check to see whether the application is running, because
	  telling an application, which is not running, to quit will start, then quit,
	  the application.
	
	4. It will also prompt you to save any open files in the application being
	  closed if the open files contain any unsaved edits.
	
	5. Information can be found about calling AppleScripts from Visual FoxPro in the
	  Visual FoxPro Online Help file under the RUNSCRIPT command.
	
	REFERENCES
	==========
	
	AppleScript Handbook, 2nd edition, by Danny Goodman
	
	Visual FoxPro for Macintosh Help
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbHWMAC kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
