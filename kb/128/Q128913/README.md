---
layout: page
title: "Q128913: PC Ext: Explanation of .PBB and .0LK Files"
permalink: kb/128/Q128913/
---

## Q128913: PC Ext: Explanation of .PBB and .0LK Files

	Article: Q128913
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Mail for PC Networks EXTERNAL.EXE program creates .0LK and .PBB
	files when transferring mail via asynchronous (async) or X.25 communication
	links. This article provides an explanation of these files.
	
	MORE INFORMATION
	================
	
	A Microsoft Mail for PC Networks mail system may contain more than one
	EXTERNAL.EXE to send mail to either a remote user or an external postoffice.
	Likewise, multiple EXTERNAL.EXE programs may serve identical functions (for
	example, operate against the same group of postoffices or remote users). If more
	than one EXTERNAL.EXE is used against the same postoffices, the programs must be
	able to access and generate mail items without conflicting with one another.
	
	The .0LK file is used to control access to a specific mail outbound queue, and
	the .PBB file is used to ensure that the same mail item can be sent to multiple
	destinations by different Externals at the same time.
	
	OLK Files
	---------
	
	For outbound mail, EXTERNAL.EXE "locks" the mailbag containing the outbound mail
	by creating a semaphore file in the P1 subdirectory. The creation and use of
	semaphore files in the P1 subdirectory keeps multiple EXTERNAL.EXE programs from
	trying to do the same operation against the same mailbag. Only the EXTERNAL.EXE
	that currently owns the lock file can send outbound mail from the mailbag. When
	the session is completed, the lock is removed.
	
	The semaphore locking mechanism is a three step process. The first step is the
	creation of a file with the mailbag name for a prefix, and .0LK for a suffix.
	The file is created in the P1 subdirectory. The second step is to verify that
	there are no older types of lock files. The third step is to open the file with
	read/write, deny-all permissions. If these steps succeed, the EXTERNAL.EXE
	program can service the mailbag. When the session is complete, the file is
	closed and deleted.
	
	If the lock file is stranded for any reason (system hang, machine rebooted in
	middle of session, etc.), this file-stranding event does not automatically
	create a problem. This will depend on the status of the file at the server.
	
	The existence of the file is not a problem in itself, because the next
	EXTERNAL.EXE to attempt a lock may be able to open the stranded semaphore lock
	file, perform the mail transfer operations, and remove the semaphore file when
	finished. If none of the External programs can use the lock file, it will have
	to be manually closed through the server administrative functions.
	
	PBB Files
	---------
	
	For each message, only one .MAI file is created. Therefore, even though a single
	message may be sent to many users, only one .MAI file has been created for that
	message. When multiple EXTERNAL.EXE programs deliver the same mail message from
	a single postoffice to different users (either different remote users or
	different postoffices), each EXTERNAL.EXE program references that single .MAI
	file from each of the remote users (or postoffices) individual mailbag files.
	For example, Remote User One and Remote User Two, each have their own mailbag
	file. Both of those mailbag files point to a single .MAI message file. Because
	each remote user has his or her own mailbag, two separate EXTERNAL.EXE programs
	may deliver that single message to both users at the same time.
	
	To send that single message to each remote user or postoffice, the EXTERNAL.EXE
	program must generate a file containing the addressing information for that .MAI
	message file. Each instance of EXTERNAL.EXE must generate a unique
	addressing-information file for each remote user or postoffice.
	
	These unique addressing-information files have the format of XXXXXXXX.PBB where
	XXXXXXXX is the hexadecimal identifier (hex-id) of the .MAI file and the BB is a
	two letter identifier generated as described in the following paragraphs. An
	example of such a file is 000005AF.PBB. EXTERNAL.EXE generates and places the
	PBB files in the P1 subdirectory of the postoffice.
	
	During a remote or dispatch session, EXTERNAL.EXE generates a unique P1 Locking
	ID or extension before generating any outgoing mail. It does this via an
	algorithm that tries to create a file LOCKP1ID.xxx, where xxx is an extension
	that can be anything from .PBB to .PZZ. If LOCKP1ID.PBB is already in use, an
	attempt to create "LOCKP1ID.PBC" is done. If this cannot be done, then the
	extension is again incremented until all possibilities are exhausted. There are
	at least 500 possible combinations, so the probability of that many concurrent
	sessions occurring is incredibly small.
	
	Once the P1 lock (that is, extension) is generated for the session, EXTERNAL.EXE
	uses it for the filename extension for generating the addressing-information
	file. This allows for multiple EXTERNAL.EXEs to dispatch the same piece of mail
	to multiple remote recipients. You will get filenames like xxx.PBB and xxx.PBC
	for the same piece of outgoing mail if a concurrent transmission is occurring
	(the prefix will be the same as the .MAI).
	
	When the session is complete, EXTERNAL.EXE will clean up by deleting any
	generated files, including the lock file(s).
	
	Additional query words: 3.00 olk mia semophore
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300
	Version           : WINDOWS:3.0,3.2,3.2a
	
	=============================================================================
	
