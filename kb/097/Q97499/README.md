---
layout: page
title: "Q97499: Ensure User Permissions Are Retained During Transfer"
permalink: /kb/097/Q97499/
---

## Q97499: Ensure User Permissions Are Retained During Transfer

{% raw %}

	Article: Q97499
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	When you use PORTACC.EXE in LAN Manager 2.1 to transfer file permissions between
	servers, there are ways to ensure that you correctly transfer the permissions.
	
	In one reported instance that occurred while servers were being migrated, file
	access permissions disappeared after the server, which had been booted as a
	standalone, was promoted to membership in the domain. Reinstalling the driver
	and running PORTACC.EXE again generated no errors of permissions already
	existing and the problem was cleared.
	
	This problem is easily avoidable if you understand access control lists (ACLs),
	global user IDs (GUIDs), and how the information they contain is transferred by
	PORTACC.EXE and the BACKACC/RESTACC utilities used for this sort of
	administrative work.
	
	MORE INFORMATION
	================
	
	PORTACC and BACKACC/RESTACC call the NETAPIs such as NetAccessGetInfo and
	NetAccessSetInfo. FAT And HPFS386 file systems differ, however, in how they
	store the information associated with these APIs. To increase transfer speed in
	HPFS386 file systems, the API NetAccessSetInfo attaches the access control list
	(ACL) directly to the file; in FAT file systems, the ACL is stored in the
	NET.ACC, and LAN Manager has to open NET.ACC to get user file permissions.
	
	Unlike the ACL, the GUID is a unique representation based on the username but
	never assigned more than once. For example, if you add user SteveHi to the
	NET.ACC, and then delete it, and then re-add it, you get a different GUID each
	time.
	
	In the case cited above, the GUIDs on the running domain no longer matched the
	numbers stored on the standalone server, so the permissions were "lost" in that
	they were no longer considered current. They differed because GUIDs are changed
	for each issuance (even for the same username) so that they are always unique.
	
	To update ACLs and make sure all necessary user information is preserved after a
	server migration, make a backup from all partitions using the following syntax:
	
	  backacc <partition> /f:<filename> /s
	
	and then restore the backups using the command:
	
	  restacc <partition> /f:<filename> /s
	
	In the instance cited in the Summary, the server was started as a standalone, and
	PORTACC.EXE was used to port the ACLs to the partition. When the server was
	promoted to backup status, an examination showed that the new NET.ACC and one on
	a different backup domain controller did not match. The tape-installed 3SCSI.BID
	was used to run PORTACC again, and this time no errors were reported that the
	permissions already existed; the problem seemed to have been cleared.
	
	PORTACC.EXE probably "worked" the second time because it was run after the server
	was promoted to membership in the domain. The RESTACC utility stores the actual
	text of the name, not the GUID. So, when the ACLs were applied the second time,
	each user got the "correct" GUID.
	
	Additional query words: 2.00 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
