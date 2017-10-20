---
layout: page
title: "Q127954: PC DB: Keeping NTFS Security Intact When Moving a PO"
permalink: /kb/127/Q127954/
---

## Q127954: PC DB: Keeping NTFS Security Intact When Moving a PO

{% raw %}

	Article: Q127954
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you copy or move the MAILDATA directory structure and files from one
	Microsoft Windows NT file system (NTFS) volume to another NTFS volume, you may
	want to ensure the Windows NT security permissions stay intact. The most
	efficient and reliable way is to use the SCOPY.EXE utility, included in versions
	3.1 and 3.5 Microsoft Windows NT Resource Kits.
	
	MORE INFORMATION
	================
	
	NTFS volumes allow Administrators to use additional security features from a
	directory down to a single file. Permissions and ownerships are established by
	the NT Server Administrator and/or File Creators. These permissions can be lost
	if MAILDATA is copied or moved via File Manager or the MS-DOS copy utilities.
	
	The SCOPY.EXE utility is designed to retain NTFS security attributes when you
	copy or move data from one NTFS volume to another. SCOPY will work between the
	same and mixed versions of NT.
	
	
	However, if you use SCOPY.EXE to move a postoffice, it will generate two errors
	for each read-only file it encounters. For example,
	
	  N:\ATT\POPULATE.MSM --> M:\ATT\POPULATE.MSM
	  File copied failed
	  Access is denied
	
	Regardless of the errors, SCOPY will succeed in copying the file with security
	permissions and file attributes intact. At the end of the process, you will see
	an inaccurate count of file(s) copied. This is the result of SCOPY not counting
	the files that generated the above errors.
	
	Here is a list of the files that are read-only by default in MAILDATA (expect to
	see errors on each file):
	
	In every sub-directory under MAILDATA:
	
	- POPULATE.MSM
	
	MAILDATA\TPL:
	
	- all *.TPL files
	
	MAILDATA\GLB:
	
	- ANSISORT.GLB
	
	- C850SORT.GLB
	
	- DS_MSG.GLB
	
	- ENGMAI.GLB
	
	- ENGMON.GLB
	
	- ERRORADM.GLB
	
	- ERRORDYN.GLB
	
	- TRANSFIL.GLB
	
	- WELCOME.GLB
	
	- all *.SCR files
	
	- all *.MDM files
	
	MAILDATA\HLP:
	
	- all *.HLP files
	
	The SCOPY command-line syntax is as follows:
	
	     SCOPY source destination [/o] [/a] [/s]
	
	  source         Specifies files to copy.
	  destination    Where to copy files to.
	  /o             Copies owner security information.
	  /a             Copies auditing information. Requires that you have
	                 the Manage Auditing User Right on both the source and
	                 destination computers.
	  /s             Copies all files in subdirectories.
	
	Additional query words: 3.00 3.20 3.20a WINNT security move
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300
	Version           : WINDOWS:3.0,3.2,3.2a
	
	=============================================================================
	

{% endraw %}
