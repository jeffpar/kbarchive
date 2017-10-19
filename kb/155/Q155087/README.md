---
layout: page
title: "Q155087: PRB: Script Error: Expected &quot;End&quot; but Found Unknown Token"
permalink: /kb/155/Q155087/
---

## Q155087: PRB: Script Error: Expected &quot;End&quot; but Found Unknown Token

	Article: Q155087
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a RUNSCRIPT command is issued in FoxPro, the following error message is
	returned:
	
	  Script error: Expected "End" but found unknown token
	
	CAUSE
	=====
	
	The script was created in the FoxPro file editor that places carriage returns
	and line feed characters at the end of each line.
	
	WORKAROUND
	==========
	
	Use SimpleText editor or Script Editor to create script. Or, in FoxPro, do one
	of the following to eliminate the line feed characters at the end of each line:
	
	1. From the Tools menu, select Options, and then select the edit tab. Clear the
	  Save with Line Feeds checkbox.
	
	2. Use the FoxTools.CFM FxStripLF function. For more information about using
	  this function, please see the following article in the Microsoft Knowledge
	  Base:
	
	  Q109481 How to Strip Linefeeds from Exported (.TXT) Files
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a file by typing the following in the Command window:
	
	     MODIFY FILE Run_My_Sript
	
	2. Enter the following in the File window:
	
	     ON RUN(fldname)
	         DISPLAY DIALOG fldname  -- company name sent from FoxPro displays
	         RETURN fldname   -- send company name back to FoxPro
	     END RUN
	
	3. Save the above as "run_my_script" (without the quotation marks) in the
	  vfp\samples\data subdirectory.
	
	4. Create the following FoxPro program in the vfp\samples\data subdirectory:
	
	     SET DEFAULT TO SYS(2004) + ":samples:data"
	     USE "customer.dbf"
	     RUNSCRIPT "run_my_script" ;
	                to X with customer.company
	     ? X     && company name is returned  to X from Script
	
	5. Save and run the above program.
	
	REFERENCES
	==========
	
	"Visual FoxPro Installation Guide and Master Index," p.76.
	
	Additional query words: kbdsd VFoxMac
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
