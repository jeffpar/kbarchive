---
layout: page
title: "Q167871: Error When Connecting to a Share on WinNT 4.0 NTFS Partition"
permalink: kb/167/Q167871/
---

## Q167871: Error When Connecting to a Share on WinNT 4.0 NTFS Partition

	Article: Q167871
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kbinterop kbWinNT400sp4fix
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to connect to a share on a computer running Microsoft Windows NT
	version 4.0 through a UNC name, you may receive one of the following error
	messages:
	
	  The directory is not a subdirectory of the root directory
	
	-or-
	
	  Application Execution Error
	
	  Access to the specified device, path or file is denied.
	
	This occurs only when you connect to a share on a Windows NT version 4.0 NTFS
	partition from a Windows NT version 3.51 client, using one of the applications
	listed at the beginning of this article.
	
	These symptoms may also occur in Systems Management Server with a Windows NT 3.51
	Systems Management Server site server and a Windows NT 4.0 logon or distribution
	server. An Error 144 may be seen in the Maintman.log file when Systems
	Management Server checks for free disk space on the logon or distribution
	server.
	
	
	RESOLUTION
	==========
	
	To work around the problem, perform one of the following steps:
	
	- Map a network drive to the share.
	
	  - or-
	
	- Rather than sharing a folder off another subfolder, share the folder that
	  resides directly off the root drive.
	
	  - or -
	
	- In Program Manager, click File, and then type the UNC path and filename to
	  the document.
	
	  - or -
	
	- Upgrade the Windows NT version 3.51 clients to Windows NT version 4.0.
	
	  - or -
	
	- Upgrade the Microsoft Office 95 clients to Microsoft Office 97 because this
	  problem does not occur in Office 97.
	
	
	For additional information on share name limitations of Windows 95, please see
	the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q160843
	  Title : Windows 95/98 Clients Cannot See Long Share Names
	
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	The above symptom does not occur in the following scenarios:
	
	- Connecting from a Windows NT 4.0 client to a Windows NT 4.0 share.
	
	- Connecting from a Windows 95 client to either Windows NT 3.51 or Windows NT
	  4.0 shares.
	
	- Connecting to a share located on a FAT partition.
	
	
	Additional query words: off7 off95 acc95 xl95 ppt95 word95 access excel powerpoint word sub-directory sms
	
	======================================================================
	Keywords          : kbinterop kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : :3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
