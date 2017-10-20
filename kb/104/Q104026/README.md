---
layout: page
title: "Q104026: PC Ext: F1 Displays Help Screen in External Mail Program"
permalink: /kb/104/Q104026/
---

## Q104026: PC Ext: F1 Displays Help Screen in External Mail Program

{% raw %}

	Article: Q104026
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A Help screen is available in the External Mail program (EXTERNAL.EXE) that is
	included with versions 3.2 and 3.5 of Microsoft Mail for PC Networks.
	
	While External is running and not delivering mail, press the F1 key. The
	following Help screen will be displayed:
	
	  Function Key Definitions
	
	      Key         Definition
	      -------------------------------------------------------------
	      F1          Displays function key definitions
	
	      F2          Dispatch Mail Postoffice Status
	
	      F3          External Mail Postoffice Status
	
	      Ctrl+F10    Aborts Async Mail Transfer
	
	      ESC         Initiates shutdown and prompts for confirmation at
	                  main screen. Returns to main screen from secondary
	                  screens.
	
	The Dispatch Mail Postoffice Status and External Mail Postoffice Status screens
	display all the mail at each postoffice. The UP ARROW and DOWN ARROW keys cycle
	through the Mail display. The PAGE UP and PAGE DOWN keys cycle through all the
	postoffices that are included while the External Mail program is running. For
	each postoffice, the type of connection and the status of the postoffice is also
	displayed.
	
	MORE INFORMATION
	================
	
	The information displayed by the Dispatch Mail Postoffice Status (F2) and
	External Mail Postoffice Status (F3) screens comes directly from the
	conventional memory used by the External Mail program.
	
	The routing tables stored in memory are compiled from the MASTER.GLB,
	ACCESS2.GLB, GROUP.GLB, NETWORK.GLB, and all the .XTN files stored on the home
	postoffice. By default, routing tables are updated every 30 minutes.
	
	Additional query words: 3.20 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN350
	Version           : WINDOWS:3.2,3.5
	
	=============================================================================
	

{% endraw %}
