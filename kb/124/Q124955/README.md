---
layout: page
title: "Q124955: MHS: Gateway to MHS INSTALL.EXE Version 3.0.1 Update"
permalink: kb/124/Q124955/
---

## Q124955: MHS: Gateway to MHS INSTALL.EXE Version 3.0.1 Update

	Article: Q124955
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MHS, version 3.0 
	- Microsoft Mail Gateway to MHS Access, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a replacement for the INSTALL.EXE file that is included with
	version 3.0 of Microsoft Mail Gateway to MHS and version 3.0 of Microsoft Mail
	Gateway to MHS Access.
	
	For complete information about obtaining and installing the INSTALL.EXE file, see
	the following sections:
	
	- To download the updated files
	
	- To replace your INSTALL.EXE file
	
	MORE INFORMATION
	================
	
	This update corrects the following problem:
	
	- The installation procedure runs out of memory and is unsuccessful on
	  postoffices if more than 429 postoffices are already defined in the Mail
	  Administrator program (ADMIN.EXE).
	
	To download the updated file
	----------------------------
	
	The files listed below are available to download from the Microsoft Download
	Center. For information on how to download these files, please see the "To
	download the updated files" section below.
	
	FILES AVAILABLE FROM ONLINE SERVICES
	------------------------------------
	
	Item ID      Filename     Description
	-----------------------------------------------------------
	S15128       MHSGINST.EXE  Update for Microsoft Mail
	                          Gateway to MHS
	S15129       MHSAINST.EXE  Update for Microsoft Mail
	                          Gateway to MHS Access
	
	To download the updated files:
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  DownloadDownload Mhsainst.exe now
	  (http://download.microsoft.com/download/pcmail/Update/14/DOS/EN-US/Mhsainst.exe)
	
	  DownloadDownload Mhsginst.exe now
	  (http://download.microsoft.com/download/pcmail/Update/15/DOS/EN-US/Mhsginst.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	After you download MHSGINST.EXE or MHSAINST.EXE to a clean directory, run it (by
	typing "mhsginst" (without the quotation marks) or "mhsainst" (without the
	quotation marks), respectively, at the MS-DOS prompt) to extract the contents of
	the file. You should receive the following files:
	
	  MHSGINST.EXE:
	  INSTALL.EXE (40,233 bytes, dated 12-20-94, 8:59 A.M.)
	  README.TXT
	
	  MHSAINST.EXE:
	  INSTALL.EXE (42,345 bytes, dated 12-19-94, 1:51 P.M.)
	  README.TXT
	
	To replace your INSTALL.EXE file:
	
	1. At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <path>:\install.exe <destination> " (without the quotation
	  marks)
	
	  where <path> is the drive and directory where you ran the self
	  extracting MHSGINST.EXE or MHSAINST.EXE file and <destination> is the
	  drive and directory where your Gateway to MHS or Gateway to MHS Access disk
	  currently resides. For example, if you ran the self-extracting file from the
	  TEST directory on drive D, and your gateway disk is located in drive A, type
	  the following commands:
	
	  " copy d:\test\install.exe a: " (without the quotation marks)
	
	2. Follow the installation steps as outlined in the Microsoft Mail Gateway to
	  MHS "Administrator's Guide."
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300 kbMailGateMHSAccess300
	Version           : :3.0
	
	=============================================================================
	
