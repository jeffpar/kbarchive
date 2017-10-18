---
layout: page
title: "Q107767: PC Gen: How Global Groups Work When Sending Mail"
permalink: kb/107/Q107767/
---

## Q107767: PC Gen: How Global Groups Work When Sending Mail

	Article: Q107767
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1x,3.0,3.0a,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1x, 3.0, 3.0a, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Versions 2.1, 3.0, 3.0a, and 3.2 of Microsoft Mail for PC Networks have a very
	complex group structure. The global group definitions span many files. These
	files include:
	
	  GROUP.GLB (Contains the postoffice group names)
	  GRPMEM.GLB (Used for group folders.)
	  ADMIN.GRP (Contains tuple identifier (TID) values for group members)
	  ADMINSHD.GRP (Shadow file of ADMIN.GRP)
	  xxxxxxxx.MEM (Contains group member mailbags for external mail delivery)
	  ADMIN.NME (Postoffice address list)
	  ADMINSHD.NME (Shadow file of ADMIN.NME)
	
	In addition, ACCESS2.GLB is used to find all local postoffice group member's
	mailbag numbers, and NETPO.GLB is used when there are any external addresses
	included in the global group. All external users or groups that are going to be
	included in a local global group must be added to the postoffice address list
	(ADMIN.NME) prior to being included in a local global group.
	
	The files that are accessed when mailing to a global group from the postoffice
	address list are:
	
	  ADMIN.NME
	  ADMIN.GRP
	  GROUP.GLB and
	  ACCESS2.GLB.
	
	The NETPO.GLB will also be accessed if the group contains external addresses.
	
	The GROUP.GLB appears to be an unnecessary component of the mailing process but
	if the GROUP.GLB file is missing or if the GROUP.GLB has been reset to a 4 byte
	header, then the user will receive a Notice 8," Error in transmitting mail or
	server disk is full." However, if the group's definition in the GROUP.GLB has a
	corrupted alias, address, TID (MEM filename), type, or delete flag, the group
	can still be mailed to from the postoffice address list.
	
	The ADMIN.NME has a 45 byte record that contains the group's alias, TID (which
	for the group is the *.MEM filename), alias type (4 = group), and a pointer that
	is a byte offset into the ADMIN.GRP file where the group's definition begins.
	Each of the local user's addresses are also stored in the ADMIN.NME.
	
	The ADMIN.GRP is a linked list of TID values representing all of the group
	member's TID values in the ADMIN.NME. The byte offset stored in the group's
	ADMIN.NME record points to the first member's record in the ADMIN.GRP which
	contains that user's TID value in the ADMIN.NME and the byte offset from the
	beginning of the ADMIN.GRP to the next member of the group. This linked list
	continues until a null offset (0) is encountered, which is the end of the group
	definition. The ADMIN.GRP contains all of the linked lists for all local global
	group members on the postoffice.
	
	Each group member's TID value in the ADMIN.GRP corresponds to that member's TID
	value in the ADMIN.NME. Each of the local group member's mailbag numbers are
	then derived from the user[ASCII 146]s ADMIN.NME record that points to the
	user[ASCII 146]s record in the ACCESS2.GLB. The ACCESS2.GLB record contains the
	filename of that user's mailbag.
	
	The external groups or users that may have been added to the postoffice address
	list in order to be included in the local group will have an alias type of 2.
	All group members that have this alias type in the ADMIN.NME will have their
	addresses resolved through the NETPO.GLB file. The external member's byte offset
	in the NETPO.GLB file will be determined from the "file pointer" field in the
	ADMIN.NME. The external member's record in the NETPO.GLB will then yield that
	member's network name, postoffice name, mailbox name, and the mailbag number for
	the external postoffice definition on the local postoffice. That member's mail
	message will then be passed to the external postoffice's mailbag where it will
	wait for the external MTA to send the message.
	
	MORE INFORMATION
	================
	
	The following diagram may be helpful in conceptualizing the way groups are
	resolved.
	
	         Byte                               TID
	        Offset           TID               /---->ACCESS2.GLB --->mailbag
	                                         / 
	ADMIN.NME------>ADMIN.GRP----->ADMIN.NME/ 
	                                       \ 
	                                         \  Byte Offset
	                                           \---->NETPO.GLB ----->mailbag
	                                             (external users only)
	
	NOTE: The GROUP.GLB file must be present for the group mail to be resolved, but
	it does not participate in determining the destination mailbags.
	
	Additional query words: 2.1x 3.00 3.00a 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN300a kbMailPCN21xSearch
	Version           : WINDOWS:2.1x,3.0,3.0a,3.2
	
	=============================================================================
	
