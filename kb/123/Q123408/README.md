---
layout: page
title: "Q123408: History of Microsoft MS-DOS CD-ROM Extensions (MSCDEX)"
permalink: /kb/123/Q123408/
---

## Q123408: History of Microsoft MS-DOS CD-ROM Extensions (MSCDEX)

{% raw %}

	Article: Q123408
	Product(s): Microsoft Disk Operating System
	Version(s): 2.1,2.2,2.21,2.22,2.23
	Operating System(s): 
	Keyword(s): win31 msdos kbgraphxlinkcritical
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CD-ROM Extensions (MSCDEX) for MS-DOS, versions 2.1, 2.2, 2.21, 2.22, 2.23 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article documents the changes in the Microsoft MS-DOS CD-ROM Extensions
	(MSCDEX) from version 2.1 to version 2.23.
	
	  MSCDEX version   Microsoft product that MSCDEX ships with
	  --------------------------------------------------------------------
	  2.1-2.2          None
	  2.21             Windows for Workgroups 3.1
	  2.22             MS-DOS 6.0
	  2.23             MS-DOS 6.2, 6.21, 6.22, Windows for Workgroups 3.11
	
	MORE INFORMATION
	================
	
	Changes from Version 2.1 to 2.2
	-------------------------------
	
	- Approximately 12K of conventional memory is freed by moving the dynamic
	  buffers to EMS (expanded memory specification) memory.
	
	- SETUP.EXE now detects EMS memory and automatically uses the /E option for
	  installation when EMS memory is available.
	
	- A set "Owner ID" bit in the directory entry is now recognized.
	
	- The expanded memory interface now avoids writing extraneous data into the
	  expanded memory buffers of an application.
	
	- Function request #8, Absolute Disk Read, no longer returns an error when 0
	  (zero) sectors are requested.
	
	- The MS-DOS version 4.0 interface now returns the "Access denied" or "File Not
	  Found" error message, as it should, when appropriate.
	
	- The return value of the READ Device Status command now indicates whether
	  reading of the R-W subchannels is supported. The corresponding description
	  for obtaining the audio subchannel information has been expanded to cover the
	  need for obtaining this information concurrently with audio data.
	
	Changes from Version 2.2 to 2.21
	--------------------------------
	
	- Version 2.21 corrects the problem that can occur when you use the /S switch
	  to share a CD-ROM drive on a network and hang the computer.
	
	- Version 2.21 changes the MS-DOS version check to allow MS-DOS version 5.0, so
	  a SETVER entry is no longer needed.
	
	Changes from Version 2.21 to 2.22
	---------------------------------
	
	- MSCDEX now loads into UMA. If there is enough memory available, MSCDEX
	  version 2.21 and earlier can load into upper memory. MSCDEX version 2.21 and
	  earlier require the load size of MSCDEX (which varies for different
	  configurations) plus 48K of memory to load. The extra 48K of memory is added
	  to ensure there is enough memory to load COMMAND.COM.
	
	  MSCDEX version 2.22 checks to see if the driver is being loaded above 640K. If
	  it is, MSCDEX does not add 48K to the initialization load size because it
	  does not need to be concerned with the transient portion of COMMAND.COM.
	
	- MSCDEX is no longer version dependent. If you are using MS-DOS 5.0 or 6.0,
	  earlier version of MSCDEX require that you use SETVER.EXE to tell MSCDEX the
	  MS-DOS version is 4.0.
	
	- The /V switch now reports accurate memory statistics. Earlier versions of
	  MSCDEX were not accurate.
	
	Changes from Version 2.22 to 2.23
	---------------------------------
	
	- MSCDEX version 2.22 erroneously assumes that files in a directory on a CD-ROM
	  are sorted (collated by ASCII code value). Performing a file search could
	  result in missed files if the files on the CD-ROM are not sorted. MSCDEX
	  version 2.23 does not assume that the files are sorted but instead searches
	  the entire directory and does not return a "File not found" error message
	  unless the file does not actually exist.
	
	- MSCDEX version 2.23 allows files and directory names to begin with an
	  exclamation point (!), allowing EISA configuration files to be shipped on
	  CD-ROMs.
	
	NOTE: MSCDEX.EXE version 2.23 has been made available for customers. Only the
	English language version of this file is available. MSCDEX.EXE version 2.23 is
	available as a self-extracting file named MSCDX223.EXE.
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Mscdx223.exe now
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words: 2.10 2.20 2.21 2.22 2.23 mmtitles cdg nec sony hitachi panasonic pro audio soundblaster SCSI homemm history
	
	======================================================================
	Keywords          : win31 msdos kbgraphxlinkcritical 
	Technology        : kbAudDeveloper kbMSCDEXSearch kbMSCDEX210DOS kbMSCDEX220DOS kbMSCDEX221DOS kbMSCDEX222DOS kbMSCDEX223DOS
	Version           : :2.1,2.2,2.21,2.22,2.23
	
	=============================================================================
	

{% endraw %}
