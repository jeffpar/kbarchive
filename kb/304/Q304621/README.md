---
layout: page
title: "Q304621: Read Access to Hidden Files on NTFS Partition Seems to Be Lost"
permalink: kb/304/Q304621/
---

## Q304621: Read Access to Hidden Files on NTFS Partition Seems to Be Lost

	Article: Q304621
	Product(s): Microsoft Windows NT
	Version(s): 2.0,2.1 OEM Only
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Services for UNIX, versions 2.0, 2.1 OEM Only 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can mark files on a partition that uses the NTFS file system as hidden by
	setting the Hidden attribute (for example, by using the "attrib +h myfile.txt"
	command). If you set a file's Hidden attribute on an NTFS partition, read access
	to the file from NTFS may seem to be lost.
	
	CAUSE
	=====
	
	This problem occurs because a logic error causes Server for NFS to parse the
	permissions incorrectly.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version        Size     File name
	  ------------------------------------------------------
	  26-Jul-2001  11:24  5.2000.328.23  201,104  Nfssvr.sys
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinServiceUNIX200 kbWinServiceUNIXSearch kbWinServiceUNIX210OEM
	Version           : :2.0,2.1 OEM Only
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
