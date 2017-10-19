---
layout: page
title: "Q188806: &quot;::&#36;DATA&quot; Data Stream Name of a File May Return Source"
permalink: /kb/188/Q188806/
---

## Q188806: &quot;::&#36;DATA&quot; Data Stream Name of a File May Return Source

	Article: Q188806
	Product(s): Internet Information Server
	Version(s): NT:4.0; winnt:1.0,2.0,3.0,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0 
	- Microsoft Peer Web Server version 4.0 for Windows NT 4.0 
	- Microsoft Personal Web Server version 4.0 for NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The native Windows NT file system, NTFS, supports multiple data streams within a
	file. The main data stream, that which stores the main content, is called DATA.
	Accessing this NTFS attribute directly from a browser may display the script
	code for the file.
	
	CAUSE
	=====
	
	The problem is caused by the way Internet Information Server (IIS) parses file
	names. The fix involves IIS supporting NTFS alternate data streams by asking
	Windows NT to canonicalize the filename.
	
	NOTE: For the problem to occur, all of the following conditions must exist:
	
	- The file must reside on an NTFS partition.
	
	- The user must know the name of the file.
	
	- The user must have Read access to the file.
	
	WORKAROUND
	==========
	
	NOTE: The fix for a bug in the W3 and FTP Performance Monitor ALSO fixes the
	problem described in this article. If you plan to use the Performance Monitor,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q185349 : Problems Remotely Accessing W3 or FTP Perfmon Counters
	
	If you cannot apply the available fix, you can use the following workarounds to
	temporarily address this issue.
	
	All IIS versions:
	
	Normally, web users do not need Read access to script files, such as .ASP files.
	They simply need Execute permissions. Removing Read access to these files for
	non-administrative users will remove this exposure.
	
	IIS 4.0 only:
	
	Make the following additions to the Application Map in IIS 4.0 (this should be
	done for all mappings):
	
	1. Open the Microsoft Management Console (MMC).
	
	2. Right-click the Virtual Server in question.
	
	3. Click Properties on the shortcut menu.
	
	4. On the Home Directory tab, select Configuration.
	
	5. Now add each of the entries noted below to the list of application mappings.
	  The entries should be entered into the Extension.
	
	  Executable Path %System32%\Inetsrv\Asp.dll
	
	        .asp::$DATA
	        .asa::$DATA
	
	  Executable Path %System32%\Inetsrv\Ssinc.dll
	
	        .stm::$DATA
	        .shtm::$DATA
	        .shtml::$DATA
	
	  Executable Path %System32%\Inetsrv\Httpodbc.dll
	
	        .idc::$DATA
	
	  Executable Path %System32%\Webhits.dll
	
	        .htw::$DATA
	
	  If you use Index Server, also include the following:
	
	  Executable Path %System32%\Idq.dll
	
	        .idq::$DATA
	        .ida::$DATA
	
	  PERL
	
	  If you use PERL, add the following entry, mapped to your PERL script
	  interpreter:
	
	        .pl::$DATA
	
	General Security Practices:
	
	In addition, the following practices can help to further improve security for
	your IIS servers:
	
	- Periodically review the users and groups who have access to the web server.
	  Review the users and groups and their permissions to ensure that only valid
	  users have the appropriate permissions.
	
	- Use auditing to detect suspicious activity. Apply auditing controls on
	  sensitive files and review these logs periodically to detect suspicious or
	  unauthorized behavior.
	
	- Set Read and Execute permissions appropriately. ASP and other script files do
	  not need to be readable by users that access them through IIS, rather they
	  need to be executable. Thus, it is advisable to remove Read access from these
	  files for normal users.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	versions 1.0, 2.0, 3.0, and 4.0, Peer Web Server versions 2.0 and 3.0, and
	Personal Web Server version 4.0 on Windows NT 4.0 Workstation. This problem was
	first corrected in Windows NT 4.0 Service Pack 4.0 and Windows NT Server 4.0,
	Terminal Server Edition Service Pack 4.
	
	
	IIS 4.0
	-------
	
	On July 17, 1998, Microsoft released an updated version of this hotfix.
	
	This fix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/iis/iis-public/fixes/usa/security/iis4-datafix/
	
	IIS 3.0
	-------
	
	This fix has been posted to the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/iis/iis-public/fixes/
	
	IIS 1.0, 2.0
	------------
	
	For all IIS 1.0, 2.0 and Peer Web Server 2.0 platforms, we strongly recommend
	that you upgrade to a more recent version. If you cannot upgrade to a more
	recent version, you can use the workarounds listed above to temporarily address
	this issue.
	
	
	MORE INFORMATION
	================
	
	For more information on this issue, see the following Microsoft Security
	Bulletin:
	
	  File Access Issue with Windows NT Internet Information Server (IIS)
	
	A very similar problem is documented in the following article in the Microsoft
	Knowledge Base:
	
	  Q193793 : ":$DATA" Data Stream Name Returns Source of a Remote File
	
	The problem documented in Q193793 concerns the ":$DATA" data stream, rather than
	the "::$DATA" data stream described in this article. Also, the problem described
	in Q193793 only occurs on a remote computer.
	
	For more information on Alternate Data Streams, see the following article in the
	Microsoft Knowledge Base:
	
	  Q105763 : HOWTO: Use NTFS Alternate Data Streams
	
	Additional query words: Peer Web Services filename filenames pws hot fix qfe sp service pack
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400 kbiis300 kbiis200 kbiis100 kbPersWebServSearch kbPeerWebServSearch kbZNotKeyword3 kbPeerWebServ400NT400 kbPersWebServ400NTW400
	Version           : NT:4.0; winnt:1.0,2.0,3.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
