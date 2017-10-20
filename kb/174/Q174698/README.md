---
layout: page
title: "Q174698: XFOR: DXANOTES Stops Responding Due to Incorrect ID File"
permalink: /kb/174/Q174698/
---

## Q174698: XFOR: DXANOTES Stops Responding Due to Incorrect ID File

{% raw %}

	Article: Q174698
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The LinkAge Notes Directory Exchange Agent (DXA) will not process any requests.
	It appears to initialize properly and does not do anything. Requests from
	LinkAge Administrator's Process Manager to stop the process do not take effect.
	The LinkAge Notes DXA is stuck in the current activity "Processing Inbound MIF
	Message," regardless of size of the update. After you terminate the process
	through Windows NT 4.0 Task Manager (Lsdxants.exe), within the next minute the
	log reveals the following (logs are located in LINKAGE\LOGS directory):
	
	  1997/09/22 17:57:34- LDE(01a8) 4 10153:Subtask DXANOTES(lsdxants.exe)
	  has ended with return code 1
	  >> subtask(441)
	  1997/09/22 17:57:34- LDE(01a8) 2 10157:Subtask DXANOTES generated the
	  following messages:
	  >> subtask(1031)
	  1997/09/22 17:57:34- LDE(01a8) 2 10158: DXANOTES> The ID file being used
	  is: C:\notes_server\data\user.id
	  >> subtask(1049)
	  1997/09/22 17:57:34- LDE(01a8) 2 10158: DXANOTES> Enter password (press
	  the Esc key to abort):
	  >> subtask(1049)
	
	CAUSE
	=====
	
	The incorrect Lotus Notes ID file is being used in reference to the LinkAge
	Notes Directory Exchange Agent (DXA). The LinkAge Notes DXA, similar to the
	LinkAge Notes Connector, requires a Notes ID file with no password.
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. Check the [DXANOTES] section in the Linkage.ini file, located in the \LINKAGE
	  directory. The parameter NOTESINI points to the location of the Notes.ini
	  file that the LinkAge Notes DXA will use.
	
	2. Start a Notes client pointing to the Notes.ini file (notes.exe
	  =c:\notes\notes.ini).
	
	3. Select the File menu, and then click Tools, and select User ID to verify
	  which ID file is being used by the LinkAge Notes DXA.
	
	4. Change the User ID to the proper Notes ID (should not have a password) by
	  going to the File menu, clicking Tools, and selecting Switch ID.
	
	5. If you receive one of the following pop-up messages:
	
	  The ID file is locked by another process. Try again later.
	
	  -or-
	
	  Unable to open desktop file. Notes may have terminated abnormally in an
	  earlier session. Please log off or shut down the operating system before
	  running Notes again.
	
	  you should stop the LinkAge controller service from Control Panel and ensure
	  that no Lsdxants.exe, Lsntsmex.exe, Lsmexnts.exe, Notes.exe, or Nlnotes.exe
	  processes are resident in memory. If so, terminate them using task manager
	  and attempt another dirsync cycle.
	
	6. If this fails, restart the computer.
	
	MORE INFORMATION
	================
	
	By default, LinkAge Message Exchange (LME) and the LinkAge Directory Exchange
	(LDE) components connect to the same Notes server. Therefore, the Notes.ini
	parameter in the LME-NOTES and DXANOTES section points to the same Notes.ini
	file on the LinkAge computer. If the LDE component is connecting to a different
	Notes server than the LME component, the Notes.ini parameter in the DXANOTES
	section of the Linkage.ini file must reflect this difference; otherwise, dirsync
	will not work. Check this parameter first, and confirm that it is correct.
	
	
	Additional query words: HANG
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0
	
	=============================================================================
	

{% endraw %}
