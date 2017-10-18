---
layout: page
title: "Q299444: Post-Windows NT 4.0 SP6a Security Rollup Package (SRP)"
permalink: kb/299/Q299444/
---

## Q299444: Post-Windows NT 4.0 SP6a Security Rollup Package (SRP)

	Article: Q299444
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP6a 
	- Microsoft Windows NT Workstation version 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft has released a Security Rollup Package (SRP) for Windows NT 4.0 that
	includes the functionality from all security patches released for Windows NT 4.0
	since the release of Windows NT 4.0 Service Pack 6a (SP6a)
	(http://www.microsoft.com/ntserver/nts/downloads/recommended/SP6/allSP6.asp).
	This small, comprehensive rollup of post-SP6a fixes provides an easier mechanism
	for managing the rollout of security fixes. Applying the SRP does not change the
	encryption level of your computer.
	
	Compaq Array Controller Users: If you have installed the Compaq Array Controller
	Driver (Cpqarray.sys) from the Compaq Web Site, Compaq FTP Site, or Compaq
	SmartStart, please see the following article in the Microsoft Knowledge Base
	regarding Compaq Array controllers and the Windows NT 4.0 SRP:
	
	  Q305228 "STOP 0xA" Occurs After Applying Windows NT 4.0 Security Rollup
	  Package
	
	Digital Signature Issue: If you are running Internet Explorer 5.5 Service Pack 2
	(SP2) or Internet Explorer 5.01 Service Pack 2 (SP2) and you access any secure
	website (https://) that uses Secure Sockets Layer (SSL), see the following
	article in the Microsoft Knowledge Base:
	
	  Q305929 "This Certificate has an Invalid Digital Signature" Error Occurs
	  After You Install the Windows NT 4.0 Security Rollup Package (SRP)
	
	Microsoft IntelliPoint Users: If you use a version of Microsoft IntelliPoint
	earlier than 2.2, see the following article in the Microsoft Knowledge Base
	before you install the SRP:
	
	  Q305462 Mouse and Keyboard Stop Working After You Install the Windows NT 4.0
	  Security Rollup Package
	
	HP NTLock Users: If you use HP NTLock, see the following article in the Microsoft
	Knowledge Base:
	
	  Q311860 HP NTLOCK Services Fail to Start After Applying Windows NT 4.0
	  Security Rollup Package (SRP)
	
	If you add optional services, you must reapply the Windows NT 4.0 service pack
	and then the SRP. For additional information, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q196269 When to Reinstall a Service Pack
	
	If you need to add optional services, follow these steps:
	
	1. Install all optional services and companion services. You will be prompted
	  for the original Window NT 4.0 media.
	
	2. After the files are installed from the original media, but before you restart
	  your computer, reinstall Windows NT 4.0 SP6a. You must reinstall SP6a before
	  you reinstall the SRP because the SRP requires SP6a.
	
	3. Restart your computer.
	
	4. Reinstall the SRP.
	
	5. Restart your computer.
	
	6. Install other post-SP6a hotfixes as necessary.
	
	For additional information about how to install multiple hotfixes with only one
	reboot, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q296861 Use QChain.exe to Install Multiple Hotfixes with One Reboot
	
	7. Restart your computer.
	
	For more information about the SRP, visit the following Microsoft Web site:
	
	  http://www.microsoft.com/technet/treeview/default.asp?url=/technet/itsolutions/security/news/nt4srp.asp
	
	MORE INFORMATION
	================
	
	Patches are available from the following Microsoft Web site (if your language is
	not listed, please check back):
	
	  http://www.microsoft.com/ntserver/nts/downloads/critical/q299444/default.asp
	
	NOTE: This patch requires Windows NT 4.0 SP6a
	(http://www.microsoft.com/ntserver/nts/downloads/recommended/SP6/allSP6.asp).
	
	Release Date: July 26, 2001
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	NOTE: When you apply the Post-Windows NT 4.0 SP6a SRP (which includes the
	security patch mentioned in bulletin MS01-026), be aware that the Post-Windows
	NT 4.0 SP6a SRP may introduce new problems. To fix these new problems, install
	the additional patches that are described in the following articles in the
	Microsoft Knowledge Base:
	
	  Q299273 UPN Logon Option Does Not Work After You Apply Fix from MS01-026[iis]
	
	  Q269430 Incorrect Error Message Double-Clicking Lock Icon in Secure
	  Connection
	
	Fixes Included in the SRP
	-------------------------
	
	The SRP includes all post-SP6a fixes that have been delivered via Microsoft
	Security Bulletins
	(http://www.microsoft.com/technet/treeview/default.asp?url=/technet/itsolutions/security/default.asp).
	In addition, it also includes a small number of fixes that have not been
	previously discussed. Because security bulletins are disruptive to customers'
	normal maintenance procedures, Microsoft typically issues them only when a
	security issue poses an immediate danger to your systems. Issues that do not
	meet this standard are typically addressed through other delivery vehicles such
	as service packs or, in this case, the SRP.
	
	
	  Q241041 Enabling NetBT to Open IP Ports Exclusively
	
	  Q243649 Unchecked Print Spooler Buffer May Expose System Vulnerability
	
	  Q243835 How to Prevent Predictable TCP/IP Initial Sequence Numbers
	
	  Q244599 Fixes Required in TCSEC C2 Security Evaluation Configuration for
	  Windows NT 4.0 Service Pack 6a
	
	  Q246045 Malformed Resource Enumeration Arguments May Cause Named Pipes and
	  Other System Services to Fail
	
	  Q247869 Local Procedure Call May Permit Unauthorized Account Usage
	
	  Q248183 Syskey Tool Reuses Keystream
	
	  Q248185 Security Identifier Enumeration Function in LSA May Not Handle
	  Argument Properly
	
	  Q248399 Shared Workstation Setup May Permit Access to Recycle Bin Files
	
	  Q249108 Registry Data Is Viewable By All Users During Rdisk Repair Update
	
	  Q249197 Internet Explorer Does Not Allow Use of Single SGC Certificate with
	  128-Bit Encryption for Virtual Sites
	
	  Q249863 SGC Connections May Fail from Domestic Clients
	
	  Q249973 Default RTF File Viewer Interrupts Normal Program Processing
	
	  Q250625 Default Registry Key Permissions May Allow Privilege Elevation
	
	  Q252463 Index Server Error Message Reveals Physical Location of Web Folders
	
	  Q257870 Malformed Print Request May Stop Windows 2000 TCP/IP Printing Service
	
	  Q259042 Handle Leak in WinLogon After Applying Windows NT 4.0 Service Pack 6
	
	  Q259496 Incorrect Registry Setting May Allow Cryptography Key Compromise
	
	  Q259622 Command Processor May Not Parse Excessive Arguments Properly
	
	  Q259728 Windows Hangs with Fragmented IP Datagrams
	
	  Q259773 Incorrect Response to Local Procedure Call Causes "Stop" Error
	  Message
	
	  Q262388 Denial-of-Service Attack Possible from Linux RPC Client
	
	  Q262694 Malicious User Can Shut Down Computer Browser Service
	
	  Q264684 Patch for "Remote Registry Access Authentication" Vulnerability
	
	  Q265714 Windows NT 4.0 SNMP Registry Entries Are Readable
	
	  Q266433 Patch for Numerous Vulnerabilities in the LPC Port System Calls
	
	  Q267858 Memory Could Not Be Read Error Message While Doing File Operation
	
	  Q267861 RAS Registry Modification Allowed Without Administrative Rights
	
	  Q267864 MTS Package Administration Key Includes Information About Users
	
	  Q268082 DNS SOA Record May Reveal Administrator Account Name
	
	  Q269049 Registry-Invoked Programs Use Standard Search Path
	
	  Q269239 NetBIOS Vulnerability May Cause Duplicate Name on the Network
	  Conflicts
	
	  Q271216 Fix for E-mail Issues Between 128-Bit and 56-Bit Encryption Using
	  French Regional Settings
	
	  Q274835 Buffer Overflow in Network Monitor May Cause Vulnerability
	
	  Q275567 Multiple NetBT Sessions May Hang Local Host
	
	  Q276575 Patch Available for "Phone Book Service Buffer Overflow"
	  Vulnerability
	
	  Q279336 Patch Available for Winsock Mutex Vulnerability
	
	  Q279843 Several Named Pipes Like NTSVCS and LSASS are Created Without
	  Protection
	
	  Q280119 A Patch Is Available for the NTLMSSP Privilege Elevation
	  Vulnerability
	
	  Q283001 Patch Available for Malformed PPTP Packet Stream Vulnerability
	
	  Q293818 Erroneous VeriSign-Issued Digital Certificates Pose Spoofing Hazard
	
	  Q294472 Index Server Search Function Contains Unchecked Buffer
	
	  Q296185 Patch Available for New Variant of the "Malformed Hit-Highlighting"
	  Vulnerability
	
	  Q298012 Malformed RPC Request May Cause Service Failure
	
	  Q300972 Unchecked Buffer in Index Server ISAPI Extension Can Enable Web
	  Server Compromise
	
	  Q303628 Relative Path Issue Can Run Program Under System Context
	
	IIS Fixes Included in the SRP:
	
	  Q188348 Specially-Malformed FTP Requests May Create Denial of Service
	
	  Q233335 Page Contents Visible When Certain Characters are at End of URL
	
	  Q234905 Improperly Formatted HTTP Request May Cause INETINFO Process to Fail
	
	  Q238349 Specially-Malformed Header in GET Request Creates Denial of Service
	
	  Q238606 Page Contents Visible When Certain Dot Extensions Present in the
	  Virtual Directory Name
	
	  Q241805 Combined FTP and Domain Restriction Security Patch for IIS 4.0
	
	  Q244613 IIS 4.0 SSL ISAPI Filter Can Leak Single Buffer of Plaintext
	
	  Q246401 IIS May Improperly Parse Specific Escape Characters
	
	  Q249599 Virtual Directory Mapped to UNC Returns Server-Side Script Code When
	  URL Contains Additional Characters at the End of the Request
	
	  Q252693 Chunked Encoding Request with No Data Causes IIS Memory Leak
	
	  Q254142 100% CPU Usage Occurs When You Send a Large Escape Sequence
	
	  Q260205 HTTP Request with a Large Number of Dots or Dot-Slashes Causes High
	  CPU Utilization
	
	  Q260347 IIS 4: Fix for Cross-Site Scripting Issues
	
	  Q260838 IIS Stops Servicing HTR Requests
	
	  Q267559 GET on HTR File Can Cause a "Denial of Service" or Enable Directory
	  Browsing
	
	  Q269862 Patch Released for Canonicalization Error Issue
	
	  Q271652 Patch Released for Malformed URL Vulnerability That Disables Web
	  Server Response
	
	  Q274149 Cookies Are Not Marked as Secure in IIS
	
	  Q277873 Patch Available for "Web Server File Request Parsing" Vulnerability
	
	  Q280322 FPSE: Patch for Malformed Web Form Submission Security Vulnerability
	
	  Q285985 Patch Available for New Variant of File Fragment Reading via .HTR
	  Vulnerability
	
	  Q295534 Superfluous Decoding Operation Can Allow Command Execution Through
	  IIS
	
	The fixes listed in the May 14, 2001 section of the following article in the
	Microsoft Knowledge Base are included in the Post-Windows NT 4.0 SP6a SRP:
	
	  Q297860 IIS 5.0 Security and Post-Windows NT 4.0 SP5 IIS 4.0 Patch Rollup
	
	
	
	Additional query words: security_patch kbdotcom
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTS400sp6 kbWinNTS400search kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : :4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	
