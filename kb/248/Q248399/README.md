---
layout: page
title: "Q248399: MS00-007: Shared Workstation Setup May Permit Access to Recycle"
permalink: /kb/248/Q248399/
---

## Q248399: MS00-007: Shared Workstation Setup May Permit Access to Recycle

	Article: Q248399
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP4,4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kbenv kbSecurity kbWinNT400PreSP7Fix kbgraphxlinkcritical KbSECBulletin
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a shared computer, it may be possible for a user to create a folder in the
	%SystemRoot\Recycler folder that is then assigned to another user based on the
	Security Identifier (SID) number. If you do this, a malicious user may assign
	themselves extended rights to the newly created Recycle Bin folder before it is
	assigned to another user.
	
	This allows someone the ability to insert files into a user's Recycle Bin or
	permanently delete a user's files located in that specific Recycle Bin.
	
	This vulnerability does not allow the malicious user to read the files in the
	Recycle Bin folder.
	
	NOTE: This patch does not apply to computer's that use FAT partitions because
	disk security features cannot be enabled on these computers.
	
	RESOLUTION
	==========
	
	Windows NT 4.0
	--------------
	
	To resolve this problem, obtain the individual package referenced below or obtain
	the Windows NT 4.0 Security Rollup Package. For additional information on the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q299444 Post-Windows NT 4.0 Service Pack 6a Security Rollup Package (SRP)
	
	The following files are available for download from the Microsoft Download
	Center:
	
	NOTE: This patch only applies to Internet Explorer 4.0 without Active Desktop
	enabled. If you apply this patch to a computer running IE 4.0 with Active
	Desktop enabled, it will appear that the patch installed correctly; however,
	Shell32.dll is not replaced.
	
	  x86: DownloadDownload Q248399i.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=22155)
	
	  Alpha: DownloadDownload Q248399a.exe now
	  (http://www.microsoft.com/downloads/release.asp?ReleaseID=22155)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date       Time     Size        File name     Platform
	  -------------------------------------------------------------
	  01/18/00   02:47p   1,280,784   Shell32.dll   x86
	  01/18/00   02:47p   1,857,808   Shell32.dll   Alpha
	
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the Windows NT Server 4.0, Terminal Server
	Edition, Security Rollup Package (SRP). For additional information about the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q317636 Windows NT Server 4.0, Terminal Server Edition, Security Rollup
	  Package
	
	STATUS
	======
	
	Microsoft has confirmed that this problem could result in some degree of
	security vulnerability in Windows NT 4.0 and Windows NT Server 4.0, Terminal
	Server Edition.
	
	MORE INFORMATION
	================
	
	The Windows NT Recycle Bin for a user maps to a folder in %SystemRoot%\Recycler.
	The name of the folder is based on the owner's SID. The folder is created the
	first time the user deletes a file, and the owner is given the only permissions
	to it. However, if a malicious user can create the folder before the real one is
	created, that user could assign permissions that give them the ability to delete
	files from it or add files to it.
	
	There are several significant limitations that make it extremely difficult to
	exploit this vulnerability. The malicious user would need to share a machine
	with the other user, and would need to create the bogus Recycle Bin before the
	user's bona fide folder were created. This vulnerability only enables the
	malicious user to take action against the Recycle Bin on the particular machine
	that is attacked. The vulnerability does not allow the malicious user to read
	any files in the other user's Recycle Bin, nor would it give him or her a means
	of inducing the other user to retrieve a bogus file from it.
	
	For related information on this problem, please visit the following Microsoft Web
	site:
	
	  http://www.microsoft.com/technet/security/bulletin/ms00-007.asp
	
	For additional security-related information about Microsoft products, please
	visit the following Microsoft Web site:
	
	  http://www.microsoft.com/technet/security/
	
	Additional query words: security_patch kbtsesrp
	
	======================================================================
	Keywords          : kbenv kbSecurity kbWinNT400PreSP7Fix kbgraphxlinkcritical KbSECBulletin 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServ400sp6 kbNTTermServSearch
	Version           : :4.0,4.0 SP4,4.0 SP5,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
