---
layout: page
title: "Q132734: NetWare Support in Windows 95 Questions and Answers"
permalink: /kb/132/Q132734/
---

## Q132734: NetWare Support in Windows 95 Questions and Answers

	Article: Q132734
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbfile kbnetwork win95 win98 kbgraphxlinkcritical
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	1. Q. Why doesn't my NetWare login script load my terminate-and-stay- resident
	  programs (TSRs)?
	
	  A. In Windows 95, TSRs loaded in a login script are run in an MS- DOS virtual
	  machine, which is not available globally. The TSRs are closed after the login
	  script has been processed when Windows 95 closes the MS-DOS virtual machine.
	
	2. Q. How can I use Novell's Network Directory Services with the Microsoft
	  Client for NetWare Networks?
	
	  A. Microsoft has released the Microsoft Service for NetWare Directory Services
	  (NDS). The Microsoft Service for NDS provides all the functionality that
	  Information Systems Professionals need to connect to NDS servers and to run
	  many important utilities.
	
	  If you are running Windows 95, you can obtain the Microsoft Service for NDS
	  from the Microsoft Software Library (MSL) on several online services as a
	  self-extracting file named Msnds.exe. For additional information about the
	  Microsoft Service for NDS and how to obtain the Msnds.exe file, please see
	  the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q138709 TITLE: Microsoft Service for NetWare Directory Services
	  Available
	
	  If you are running Windows 98, the Microsoft Service for NDS is included as a
	  network service. To install the Microsoft Service for NDS, follow these
	  steps:
	
	  1. Click Start, point to Settings, and then click Control Panel
	
	  2. Double-click Network.
	
	  3. On the Configuration tab, click Add.
	
	  4. Click Service, and then click Add.
	
	  5. Under Manufacturers, click Microsoft, and then click Service For NetWare
	     Directory Services under Network Services.
	
	  6. Click OK, click OK again, and then click Yes when you are prompted to
	     restart your computer.
	
	3. Q. My NetWare login script does not run. What can I do?
	
	  A. If your NetWare login script does not run, try the following four steps:
	
	  1. Make sure to set a preferred server in the properties for the Microsoft
	     Client for NetWare Networks.
	
	  2. If the frame type for the IPX/SPX-compatible network protocol is set to
	     Auto, change it to the frame type the NetWare server is using.
	
	  3. If there is a "lastdrive=" statement in the Config.sys file, remove it or
	     disable it by inserting a semicolon at the beginning of the line.
	
	  4. Make sure the IPX/SPX-compatible network protocol appears on the Bindings
	     tab in the properties for the network adapter in your computer.
	
	  If you continue to have problems, it may be because the network adapter is not
	  loading. Make sure the network adapter settings in Windows 95 match the
	  actual network adapter settings.
	
	4. Q. I cannot see my NetWare server on a token ring network. What can I do?
	
	  A. You may need to enable source routing. To do so, use the following four
	  steps:
	
	  1. Click the Start button, point to Settings, and then click Control Panel.
	
	  2. Double-click the Network icon.
	
	  3. On the Configuration tab, click the IPX/SPX-compatible network protocol,
	     and then click Properties.
	
	  4. On the Advanced tab, click Source Routing in the Property box, and then
	     click "16 entry cache (recommended)" in the Value box.
	
	5. Q. When I set up Windows 95 to use VLM or NETX, I am prompted for files.
	  Where do I get these files?
	
	  A. These files are available from Novell's BBS or Internet site. For
	  additional information, please contact Novell.
	
	6. Q. What does the "File and printer sharing for NetWare networks" component
	  do?
	
	  A. This component is a service that allows computers running Windows 95 to
	  process NCP-based requests for file and printer input and output. Even
	  real-mode VLM and NETX clients can access files and printers shared with this
	  service. To install this component, there must be a NetWare server on your
	  network.
	
	7. Q. Does Windows 95 support the NetWare RPrinter tool?
	
	  A. Windows 95 does not support the RPrinter tool. However, Windows 95 does
	  include a tool called Microsoft Print Agent for NetWare Networks. This tool
	  is similar to the RPrinter tool and allows computers running Windows 95 to
	  spool print jobs from a NetWare print server to its local printer.
	  Instructions for installing this tool are contained in the Prtagent.txt file.
	  This file is located in the Admin\NetTools\PRTAgent folder on the Windows 95
	  CD-ROM.
	
	8. Q. Does the Microsoft Client for NetWare Networks require any Novell
	  real-mode drivers (such as ODI or NETX)?
	
	  A. No. The Microsoft Client for NetWare Networks works with protected-mode
	  NDIS drivers and does not use any conventional memory.
	
	9. Q. How do I use Btrieve(R) with Windows 95?
	
	  A. For information about using Btrieve with Windows 95, please see the
	  following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q118629
	  TITLE: Using Novell Btrieve with Windows 95
	
	10. Q. How do I enable long filename support on a Novell NetWare volume?
	
	  A. To use long filenames on a NetWare volume, you must obtain a patch called
	  311ptd.exe from Novell. You can obtain this patch from Novell's BBS or
	  Internet site. After you enable long filename support on the NetWare volume
	  using the instructions included in the patch, you must add the following
	  lines to the System.ini file:
	
	   
	            [NWRedir]
	            SupportLFN=2
	        
	
	  For more information about enabling long filename support on a NetWare
	  volume, please contact your system administrator, Novell, or a local
	  authorized Novell reseller.
	
	You can download this document as a self-extracting compressed file named
	Ww1192.exe.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Download Ww1192.exe now
	
	For additional information about how to download Microsoft Support
	files, click the article number below 
	to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available 
	on the date of posting to scan this file for viruses. Once posted, 
	the file is housed on secure servers that prevent any unauthorized 
	changes to the file.
	
	Additional query words: 95
	
	======================================================================
	Keywords          : kbfile kbnetwork win95 win98 kbgraphxlinkcritical 
	Technology        : kbWin95search kbWin95
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
