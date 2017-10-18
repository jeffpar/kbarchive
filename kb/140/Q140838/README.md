---
layout: page
title: "Q140838: SNA Server Win3x Client Tracing Text File Copied to SNA Clients"
permalink: kb/140/Q140838/
---

## Q140838: SNA Server Win3x Client Tracing Text File Copied to SNA Clients

	Article: Q140838
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	During installation of an SNA Server Win3x client, the TRACES.TXT file is
	installed to the <SNA_Win3x_root>\ directory. When troubleshooting, this
	allows you to quickly enable client-side tracing by adding the needed entries by
	cutting and pasting from that file because the file is already on the client
	computer. (This eliminates the need to type the entries by copying them from the
	SNA Server Administrator's Guide or having to have access to the SNA Server
	compact disc that contains this file, too.) The more information section shows
	the content of the TRACES.TXT file.
	
	
	STATUS
	======
	
	This feature is included in the latest U.S. Service Pack for SNA Server for
	Windows NT, version 2.11. For information on obtaining the Service Pack, query
	on the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	File contents of TRACES.TXT:
	
	I. ENABLING SNA SERVER WIN3.X CLIENT TRACING:
	=============================================
	
	1. Load the WIN.INI file into a text editor.
	2. Locate the [WNAP] section of the file.
	3. Copy and Paste the following example trace entries to enable all tracing
	options. Refer to page 259 of the SNA Server Administration Guide for
	specific syntax conventions and tracing options.
	
	;***********************************************************
	;***************BEGINNING OF SNA SERVER TRACING*************
	;***********************************************************
	
	; FLIPLENGTH:
	; [size in bytes] Controls how large each SNA Server trace
	; file can grow (default: 250,000). If two trace file names
	; are specified, SNA Server traces wrap between two trace
	; files so the hard disk does not fill up.
	
	Fliplength=250000
	
	; TRACE FLUSHING:
	; If you are investigating a problem that may cause your
	; system to go down, be sure to include TraceFlushing=on, so ; that trace
	information will be written to disk as soon as ; it is generated.
	TraceFlushing=off disables trace
	; flushing.
	
	TraceFlushing=on
	
	; INTERNAL TRACING:
	; Enables activity within a software component of SNA
	; Server. This applies to wnap.exe and SNA applications.
	; Valid values are 0-16. 0 is full internal tracing while
	; 16 disables internal tracing. NOTE: Refer to step
	; 5 below for further instructions on internal tracing.
	
	InternalTraceLevel=0
	InternalTraceFile1=c:\int1.trc
	InternalTraceFile2=c:\int2.trc
	
	; MESSAGE TRACING:
	; Traces messages passed into and out of a software
	; component of SNA Server, including messages sent to and
	; received from the SNA network. This applies to wnap and
	; SNA applications.
	
	InternalMessageTraceState=on
	FMITraceState=on
	PVITraceState=on
	MessageTraceFile1=c:\msg1.txt
	MessageTraceFile2=c:\msg2.trc
	
	; API TRACING:
	; Traces information passed into and out fo an SNA Server
	; DLL, such as WINAPPC.DLL, as the DLL communicates with the
	; application.
	
	APITraceFile1=c:\api1.trc
	APITraceFile2=c:\api2.trc
	
	;APPC api tracing
	
	APPCTraceState=on
	
	;CSV api tracing
	
	CSVTraceState=on
	
	;RUE api tracing
	
	RUITraceState=on
	
	;HLLAPI api tracing
	
	HLLAPITraceState=on
	
	;CPIC api tracing
	
	CPICTraceState=on
	
	;***********************************************************
	;***************END OF SNA SERVER TRACING ******************
	;***********************************************************
	
	4. Save the WIN.INI file as plain (ASCII) text (that is, avoid saving the
	file in a special format specific to the text editor).
	
	5. If Internal tracing is being enabled continue to step 6.
	
	6. To enable Internal tracing:
	
	a. On the client computer, back up the following files by copying them to a
	different directory:
	
	  WindowsRoot\SYSTEM\WDMOD.DLL
	  WindowsRoot\SYSTEM\LMCLI.DLL
	  WindowsRoot\SYSTEM\NWCLI.DLL
	  WindowsRoot\SYSTEM\BVCLI.DLL
	  WindowsRoot\SYSTEM\IPCLI.DLL
	  SNAroot\WNAP.EXE
	
	You will need to restore these files to their original location after you
	finish with tracing on the client.
	
	b. Access the installation medium (SNA Server CD or network share) for
	client software:
	
	To access the CD, insert it in a CD-ROM drive. To access the network share,
	connect to it. (For information about how to create a share for
	installation of clients over the network, see: Chapter 3 of the Microsoft
	SNA Server Installation Guide.)
	
	c. Change to the appropriate directory on the CD or network share:
	
	On the CD, change to the \CLIENTS\WIN3X\TRACE directory.
	On the network share, change to the \WIN3X\TRACE directory.
	
	d. Copy the appropriate files to the hard disk of the client computer, as
	described in the following table:
	
	Type of tracing   Source file on or          Destination directory on
	                 the CD or network          the hard disk of the client
	                 share                      computer
	------------------------------------------------------------------------
	Message or API    WDMOD.DLL                  WindowsRoot\SYSTEM
	Internal          LMCLI.DLL                  WindowsRoot\SYSTEM
	                 NWCLI.DLL                  WindowsRoot\SYSTEM
	                 BVCLI.DLL                  WindowsRoot\SYSTEM
	                 IPCLI.DLL                  WindowsRoot\SYSTEM
	                 WNAP.EXE                   SNAroot
	
	Note that internal tracing is intended for the use of product-support
	technicians; interpreting these traces requires a specialized knowledge
	base.
	
	e. Remove the CD from the drive, or disconnect from the network share.
	f. Restart the SNA Server software and the Windows version 3.x software.
	
	As trace files are created, they are stored in the path(s) specified by the
	lines in the WIN.INI file.
	
	II. DISABLING SNA SERVER WIN3.X CLIENT TRACING:
	===============================================
	
	1. Load the WIN.INI file into a text editor.
	2. Locate the [WNAP] section of the file.
	3. Add, modify, or remove lines under the [WNAP] section heading.
	4. Save the WIN.INI file as plain (ASCII) text (that is, avoid saving the
	file in a special format specific to the text editor).
	5. Stop the SNA Server software and the Windows version 3.x software.
	6. If Internal tracing was enabled, continue to step 7.
	
	7. To disable Internal tracing:
	
	a. Locate the copies of the files that were backed up during the preceding
	procedure. The filenames are as follows:
	
	  WDMOD.DLL
	  LMCLI.DLL
	  NWCLI.DLL
	  BVCLI.DLL
	  IPCLI.DLL
	  WNAP.EXE
	
	b.Copy the files to destination directions as follows:
	
	Filename      Destination directory on the
	             hard disk of the client computer
	-------------------------------------------------
	
	WDMOD.DLL      WindowsRoot\SYSTEM
	LMCLI.DLL      WindowsRoot\SYSTEM
	NWCLI.DLL      WindowsRoot\SYSTEM
	BVCLI.DLL      WindowsRoot\SYSTEM
	IPCLI.DLL      WindowsRoot\SYSTEM
	WNAP.EXE       SNAroot
	
	c.Restart the SNA Server software and the Windows version 3.x software.
	
	Additional query words: prodsna 2.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
