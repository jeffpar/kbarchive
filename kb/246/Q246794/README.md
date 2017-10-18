---
layout: page
title: "Q246794: Invokable APPC/CPI-C TP May Fail Intermittently with Event 60"
permalink: kb/246/Q246794/
---

## Q246794: Invokable APPC/CPI-C TP May Fail Intermittently with Event 60

	Article: Q246794
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An invokable APPC or CPI-C application may fail intermittently. When the failure
	occurs, an event similar to the following is logged in the Windows NT
	application log on the SNA Server computer:
	
	  Event ID: 60
	  Source: SNA Server
	  Description: Failed to invoke APPC TP <TP Name>, sense data = 084C0000
	
	  Note: X'084C0000' is an IBM Sense Code that indicates
	  AP_TRANS_PGM_NOT_AVAIL_NO_RETRY.
	
	This problem occurs when an instance of the APPC or CPI-C application stops
	unexpectedly. In addition, this is most likely to occur if the application
	issues RECEIVE_ALLOCATE() calls for multiple Transaction Programs (TPs).
	
	If another instance of the application is started after the first one stops, the
	effect is likely to be that host requests to invoke the application alternates
	between successful execution and failure.
	
	Note: Event 60s are general errors that are logged when an invokable APPC/CPI-C
	TP cannot be invoked. Therefore, they result for reasons not related to the
	problem described here.
	
	CAUSE
	=====
	
	The SNA Server DMOD fails to mark all TPs registered by a process (for example
	APPC or CPI-C application) as inactive when the process stops abnormally. SNA
	Server may route host ATTACH requests to the TPs that are still marked as
	active, which results in the problem described above.
	
	RESOLUTION
	==========
	
	SNA Server 3.0:
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	+----------------------------------+
	| File name    | Date     | Time   | 
	+----------------------------------+
	| Snadmod.dll  | 11/22/99 | 2:40PM | 
	+----------------------------------+
	| Snashmem.exe | 11/22/99 | 2:41PM | 
	+----------------------------------+
	
	NOTE: Because of file dependencies, the most recent fix that contains the above
	files may also contain additional files.
	
	
	
	SNA Server 4.0:
	
	To resolve this problem, obtain the latest service pack for SNA Server 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SNA Server versions
	3.0 (all SPs), 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3.
	
	This problem was first corrected in SNA Server 4.0 Service Pack 4.
	
	MORE INFORMATION
	================
	
	After you apply the update, the DMOD searches the service table to locate all
	TPs that were registered by the process using the Process ID (PID) of the
	stopped process to ensure that all of the TPs used by that process are marked as
	no longer in use.
	
	The Snashmem.exe tool used to view an SNA Server or Client service table has also
	been updated to include the PID and process header information for each service
	table entry. To see the new information shown by Snashmem.exe, perform the
	following steps:
	
	1. Start a command prompt and set the window with the following screen
	  attributes so that the Snashmem.exe utility display does not scroll:
	
	   - Screen window size: Width = 80, Height = 50
	
	   - Font selection: Font = Raster Fonts, Size = 6x8
	
	2. Choose OK.
	
	3. Maximize the command prompt window.
	
	4. Run Snashmem.exe to display its main screen.
	
	5. Press S to look at the service table summary.
	
	6. Use the Up and Down arrow keys to move the pointer to a service table entry.
	  Note: The N and P keys are used to move to the next and previous pages,
	  because the service table contains 1022 entries.
	
	7. After you select a specific entry, press E to expand the option and show the
	  details for the service table entry.
	
	8. The following is an example of the new fields that show the PID and process
	  header:
	
	  shr->svce[2].srv.Bm.pProcessHdr = 564
	  shr->svce[2].srv.Bm.Pid = 129
	  shr->svce[2].srv.NPd.pProcessHdr = 564
	  shr->svce[2].srv.NPd.Pid = 129
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 kbSNA400sp4fix kbSNA400PreSP4fix 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
