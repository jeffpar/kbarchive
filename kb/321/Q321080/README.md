---
layout: page
title: "Q321080: Ntbackup Does Not Back Up Files from an SFU NFS Mount Point"
permalink: /kb/321/Q321080/
---

## Q321080: Ntbackup Does Not Back Up Files from an SFU NFS Mount Point

	Article: Q321080
	Product(s): Microsoft Windows NT
	Version(s): 2.0,2.1 OEM Only,2.2 OEM Only
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 31-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, versions 2.0, 2.1 OEM Only, 2.2 OEM Only 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Ntbackup.exe utility from Microsoft Windows 2000 or Microsoft Windows XP may
	not back up data from an SFU NFS mount point. Although the backup appears to
	work, the file is empty after you restore it. A netmon trace shows that an NFS
	'Read from Directory' is sent to the UNIX host, but not a 'Read from File', and
	this is why no data is backed up.
	
	CAUSE
	=====
	
	Ntbackup.exe queries the NFS client to see if it supports IOCTLs for querying
	for space regions. Although the NFS client claims to support IOCTL for querying
	sparse region, it does not.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version           Size     File name
	  -----------------------------------------------------------
	  19-Apr-2002  08:53  5.2000.328.25     168,960  Nfsclnt.exe      
	  19-Apr-2002  08:53  5.2000.328.25     113,664  Nfscprop.dll     
	  19-Apr-2002  08:53  5.2000.328.25     318,080  Nfsrdr.sys
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The NFS client has now been changed to report that it does not support IOCTL.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch kbWinServiceUNIX210OEM kbWinServiceUNIX220OEM
	Version           : :2.0,2.1 OEM Only,2.2 OEM Only
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
