---
layout: page
title: "Q109483: Using AppleScript to Programmatically Convert PICT to BMP"
permalink: /kb/109/Q109483/
---

## Q109483: Using AppleScript to Programmatically Convert PICT to BMP

	Article: Q109483
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b,3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Because the Pict To Bmp application that comes with FoxPro for Macintosh is a
	"scriptable" application, you can instruct it to programmatically convert a file
	of type "PICT" to a file of type "BMP" using AppleScript.
	
	See below for instructions and a sample script.
	
	MORE INFORMATION
	================
	
	The following script can be called from within FoxPro for Macintosh or any other
	application that can communicate with the AppleScript extension. The script can
	be keyed into the AppleScript Script Editor supplied with the AppleScript
	extension.
	
	This script requires that Scripting Additions be installed in the Extensions
	subfolder of the System Folder. The "choose file" Scripting additions is
	utilized. These additions are supplied with the AppleScript extension and placed
	in the Extensions folder by the Installer program.
	
	Please note that due to the limitations of the character set used to display and
	print this Microsoft Knowledge Base article, the line- continuation character
	created by pressing OPTION+RETURN on the Macintosh has been replaced by a
	semicolon (the FoxPro line-continuation character). When you are typing the
	script in the AppleScript Script Editor, replace any line that ends with a
	semicolon with the appropriate line-continuation character.
	
	To create the script:
	
	1. Start the AppleScript Script Editor.
	
	2. In the Script Editor edit region where the cursor is initially blinking, type
	  the following code:
	
	        -- Pict2Bmp, a routine for converting PICTs to BMPs
	
	        -- Get a file of type "PICT" to convert
	        set theFile to choose file of type {"PICT"} ;
	           with prompt "Choose PICT to convert:"
	        -- Call the conversion handler
	        Convert(theFile)
	
	        -- Conversion handler
	        on Convert(fToConvert)
	          -- Tell Pict To Bmp to convert the file
	          -- and terminate.
	          tell application "Pict To Bmp"
	            open fToConvert
	            quit
	          end tell
	        end Convert
	
	3. Save the script. If the script will not save in its compiled format, make
	  sure the script was typed exactly as it appears above, with the exception of
	  the line-continuation characters. The Script Editor should help you focus in
	  on the source of the error by highlighting the offending command.
	
	4. To run the script from the FoxPro for Macintosh Command window, issue the
	  following command
	
	  RUNSCRIPT <pict2bmp>
	
	  where <pict2bmp> is the name of the file to which the script was saved.
	
	The first time the script is run, a dialog box may appear requesting the location
	of the "Pict to Bmp" application. It is located in the FoxPro:Goodies:Misc
	folder. In Visual FoxPro for Macintosh, the application is located in the
	VFP:Tools:Tools:PictToBmp folder. To avoid this message, specify the full path
	to the application in the Convert handler of the script. For example, use the
	following command:
	
	  tell application "HD:FoxPro:Goodies:Misc"
	
	If the user chooses to cancel the script at any time during the execution of the
	script, the following FoxPro error message will be displayed:
	
	  Script error: User canceled.
	
	To avoid the display of this message in the context of a FoxPro program or
	application, use an ON ERROR handling routine to trap for error number 1917.
	
	For more information about creating scripts with AppleScript, see the
	"AppleScript Language Guide" or contact the Apple Programmer's and Developer's
	Association (APDA).
	
	Additional query words: vFoxMac FoxMac
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250bMac kbVFP300bMac
	Version           : MACINTOSH:2.5b,3.0b
	
	=============================================================================
	
