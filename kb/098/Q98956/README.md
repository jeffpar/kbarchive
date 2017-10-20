---
layout: page
title: "Q98956: LM File Permission Enforcement on a CD-ROM Drive"
permalink: /kb/098/Q98956/
---

## Q98956: LM File Permission Enforcement on a CD-ROM Drive

{% raw %}

	Article: Q98956
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	LAN Manager 2.0 and 2.0a cannot differentiate between file permissions for
	CD-ROM Drive 1 and CD-ROM Drive 2. It can determine only that there is an E
	drive, and it enforces whatever permissions have been created for files or
	directories on E, no matter which CD happens to be in the CD-ROM drive. The same
	is true for floppy disks and drives, and for any other removable media.
	
	MORE INFORMATION
	================
	
	ACLs (Access Control Lists) for CD-ROM, floppy, and other removable media are
	kept in the NET.ACC file (as are hard disk FAT partition ACLs).
	
	ACLs created for a file or directory on a CD-ROM drive are recorded in NET.ACC
	with reference to a drive letter and the designated path or file name. Thus, if
	you assign read-only access privilege to User1 for the file \DOCS\BOOK.BAR on a
	CD-ROM drive that the operating system sees as drive E, the ACL entry in NET.ACC
	looks like this:
	
	FILE ID             USER        PERMISSIONS
	e:\docs\book.bar    User1        R
	
	This entry remains in NET.ACC regardless of which CD is in the CD-ROM drive.
	Thus, if you remove CD 1 and insert CD 2 and give User1 read and write
	permission on the file \STUFF\SANE.TXT file on that CD, the NET.ACC entries look
	like this:
	
	FILE ID             USER         PERMISSIONS
	e:\docs\book.bar    User1         R
	e:\stuff\sane.txt   User1         RW
	
	Now, if you remove CD 2 and re-insert CD 1, the ACL referencing E:\DOCS\BOOK.BAR
	remains in NET.ACC and is still enforced.
	
	Additional query words: 2.20 2.2
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	

{% endraw %}
