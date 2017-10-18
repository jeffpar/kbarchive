---
layout: page
title: "Q153947: Problem Accessing Hard Drive After Running Optimizer"
permalink: kb/153/Q153947/
---

## Q153947: Problem Accessing Hard Drive After Running Optimizer

	Article: Q153947
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	
	SYMPTOMS
	========
	
	After you run the Microsoft Exchange Optimizer program (Performance Wizard) on a
	computer with a 9-GB Seagate (model ST19171N or ST19171W) or a 23-GB Seagate
	(model Seagate ST423451N or Seagate ST423451W) or a 9-GB Hewlett Packard hard
	disk drive, you may observe the following problems:
	
	
	- You may no longer have access to the data on the hard disk drive.
	
	- When you attempt to access the data, the following error messages may be
	  displayed:
	
	   - Lost Delayed Write Data error message or an Event ID 26 in the Windows NT
	     Event Log.
	
	   - STOP 0x7F or 0x77.
	
	- Using the Microsoft Windows NT Disk Administrator, you may notice that the
	  total size of the drive does not equal the originally created partition size.
	
	This problem is not 100-percent reproducible and although there are reports that
	other 9-GB drives may be affected, these reports have not been confirmed.
	
	CAUSE
	=====
	
	The Microsoft Exchange Optimizer program can create this problem because it uses
	low-level APIs to disable write caching on hard disk drives. Any program that
	uses these APIs will run into the same problem.
	
	RESOLUTION
	==========
	
	Exchange Server 4.0
	-------------------
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft Exchange Server version 4.0 service pack that contains
	this fix.
	
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
	
	Component: Performance Wizard
	+-----------------------+
	| File name   | Version | 
	+-----------------------+
	| Perfwiz.exe | 996.26  | 
	+-----------------------+
	
	
	
	Exchange Server 5.0
	-------------------
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem was corrected in the latest Microsoft Exchange 5.0 Server U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	The new Perfwiz.exe included in the Service Pack will not repair a hard disk
	drive that has already been altered by the old Performance Optimizer tool. It
	only prevents further problems on new hard disk drives.
	
	WORKAROUND
	==========
	
	To work around this problem, do not run the Microsoft Exchange Optimizer
	program.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0 and 5.0.
	
	MORE INFORMATION
	================
	
	Restoring from backup to a new hard disk drive is the best method for recovering
	the data. Currently, the affected hard disk drive must be sent back to the
	manufacturer to be reset.
	
	After implementing this fix, administrators will have to disable write caching
	themselves. Please contact your hardware manufacturer if you do not know how to
	disable write caching.
	
	The 9-GB Seagate and Hewlett Packard hard disk drives are manufactured by Seagate
	and Hewlett Packard, vendors independent of Microsoft; we make no warranty,
	implied or otherwise, regarding this products performance or reliability.
	
	
	
	Additional query words: perfwizcorruption delayed write
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
