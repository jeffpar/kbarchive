---
layout: page
title: "Q267977: SMS: Package That Contains a Long File Name May Not Decompress"
permalink: /kb/267/Q267977/
---

## Q267977: SMS: Package That Contains a Long File Name May Not Decompress

{% raw %}

	Article: Q267977
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2
	Operating System(s): 
	Keyword(s): kbfile kbsms200 kbsms200bug kbSoftwareDist kbsms200preSP3fix kbsms200SP3fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a package that contains long file names is distributed from a Microsoft
	Windows 2000-based parent site server to a child site that is running Microsoft
	Windows NT 4.0, Systems Management Server (SMS) Distribution Manager may not
	decompress the package. In the Distmgr.log file, you may receive the following
	error message:
	
	  Failed to write to the output file, Win32 Error = 13
	  Cannot decompress package D:\SMSPKG\BD100007.PCK to D:\_S M4YZ5.TMP, CTool
	  return code = 4
	
	Additionally, Distribution Manager may report the following error message:
	
	  Message ID: 2321 Message Text: SMS Distribution Manager failed to decompress
	  package BD100007 from D:\SMSPKG\BD100007.PCK to D:\_S M4YZ5.TMP.
	
	CAUSE
	=====
	
	This problem can occur when you use the BackupRead function on a computer that
	is running either Microsoft Windows 2000 Server or Microsoft Windows 2000
	Advanced Server. This function returns additional data at the end of a file. The
	additional data reports that the corresponding BackupWrite function cannot be
	interpreted when you run the function on a Microsoft Windows NT 4.0-based
	computer.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, use either of the following methods:
	
	- Use a Windows NT Server 4.0-based computer to hold the package source files
	  for the SMS package that is being created on a Windows 2000-based site
	  server. After you copy the source files to the Windows NT Server 4.0-based
	  computer and share them on the network, define the Universal Naming
	  Convention (UNC) path to that share as the package source folder.
	
	  -or-
	
	- Copy the package to another folder on the same server before you specify the
	  copied folder as the package source folder. When you copy the package files,
	  the extra data is removed from the files (this change is not visible when you
	  use Windows Explorer). After the extra data is removed from the files, the
	  problem no longer occurs.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	You should apply this fix to all sites in the SMS hierarchy. Also, you should
	re-create any package that has this decompression problem after you apply the
	fix because the fix works with the way that the package is created and not with
	the way that the package is decompressed. If you have used one of the
	workarounds in this article to correct the problem for a package, you do not
	need to re-create the package.
	
	After you apply this fix to a site, this problem can still occur with a package
	that contains a certain type of file. If the package source files contain a file
	with a long file name that is zero (0) bytes in size, the package may not
	decompress correctly. To resolve this problem:
	
	1. Open the file, and then save the file in Microsoft Windows Notepad.
	
	2. Copy the file to another folder, and then copy it back to the original
	  folder.
	
	
	Additional query words: prodsms LFNs LFN
	
	======================================================================
	Keywords          : kbfile kbsms200 kbsms200bug kbSoftwareDist kbsms200preSP3fix kbsms200SP3fix 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : :2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
