---
layout: page
title: "Q119642: PC Ext: Version Differences Locking External P1 File for Async"
permalink: kb/119/Q119642/
---

## Q119642: PC Ext: Version Differences Locking External P1 File for Async

	Article: Q119642
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1,3.0,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1, 3.0, 3.2, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Versions 2.1 and later of Microsoft Mail for PC Networks all use slightly
	different methods of dispatching mail when multiple instances of the External
	Mail program (EXTERNAL.EXE) access the same source postoffice to send mail
	asynchronously.
	
	Versions 2.1x
	-------------
	
	Microsoft Mail 2.1x uses a command-line parameter to ensure proper transmission
	of mail. As explained on page 204 of the version 2.1c "Administrator's Guide,"
	the -P0xx option is required whenever multiple Externals send mail from a single
	postoffice. For example:
	
	  external -dmn -p005
	
	For a postoffice reached via modem, External processes mail in the following
	manner:
	
	1. External locks the mailbag by creating a file in the local P1 subdirectory
	  that has the .MBG file's 8-digit prefix and a .0XX suffix. For example:
	
	  - 00000009.MBG gets locked in the local P1 subdirectory as 00000009.005.
	
	2. For all outgoing mail, External creates a file in the P1 subdirectory that
	  has the .MAI file's 8-digit prefix and a .PXX suffix. For example:
	
	   - For 0000000AB.MAI, 0000000AB.P05 is created.
	
	   - For 0000000AC.MAI, 0000000AC.P05 is created.
	
	3. External dials the remote postoffice.
	
	4. External sends the first .MAI file, then sends any associated attachments.
	
	5. For each message, the receiving External Mail program creates the .MAI file,
	  the P1 file, and the .ATT file (if there are any attachments), in that order,
	  and then updates the INQUEUE.MBG and INQUEUE.KEY files.
	
	6. If there are more messages to be delivered, step 4 is repeated.
	
	7. The sending External Mail program updates the local mailbag, and deletes the
	  .MAI and .ATT files if appropriate.
	
	8. External deletes the .MAI locking files created in step 2.
	
	9. External deletes the .MBG locking file created in Step 1.
	
	Versions 3.0x
	-------------
	
	Microsoft Mail 3.0 through 3.0.4 no longer require the use of the -P0xx
	command-line parameter. External now creates a file with a .0LK suffix to lock
	the outgoing postoffice queue or .MBG file. Because of bug fixes related to
	External delivering mail asynchronously, all Microsoft Mail version 3.0
	customers should use version 3.0.4 of the External Mail program. For a
	postoffice reached via modem, External processes mail in the following manner:
	
	1. External locks the mailbag by creating a file in the local P1 subdirectory
	  that has the .MBG file's 8-digit prefix and a .0LK suffix. This file locks
	  the mailbag for the postoffice for which External is delivering mail, thus
	  preventing other External Mail programs from processing that mailbag. For
	  example:
	
	  - 00000009.MBG gets locked in the local P1 subdirectory as 00000009.0LK.
	
	2. For all outgoing mail, External creates a file in the P1 subdirectory that
	  has the .MAI file's 8-digit prefix and a .P00 suffix. For example:
	
	   - For 0000000AB.MAI, 0000000AB.P00 is created.
	
	   - For 0000000AC.MAI, 0000000AC.P00 is created.
	
	  NOTE: If the .P00 extension is in use, version 3.0.4 of the External Mail
	  program will try P01, then PO2, and so forth. Versions 3.0 through 3.0.3
	  accidentally overwrite the existing P1 file.
	
	3. External dials the remote postoffice.
	
	4. External sends the first .MAI file, then sends any associated attachments.
	
	5. For each message, the receiving External Mail program creates the .MAI file,
	  the P1 file, and the .ATT file (if there are any attachments), in that order,
	  and then updates the INQUEUE3.MBG and INQUEUE3.KEY files.
	
	6. If there are more messages to be delivered, steps 4 and 5 are repeated.
	
	7. The sending External Mail program updates the local mailbag, and deletes the
	  .MAI and .ATT files if appropriate.
	
	8. External deletes the .MAI locking files created in step 2.
	
	9. External deletes the .MBG locking file created in Step 1.
	
	Versions 3.2 and 3.5
	--------------------
	
	Microsoft Mail 3.2 and 3.5 modified the process used by External version 3.0.4.
	External now reserves a unique suffix for all mail in the queue with a new file
	called LOCKP1ID.PXX. If there are other LOCKP1ID.PXX files in the local P1
	subdirectory, the .PXX suffix increments alphabetically: the range is PBB
	through PZZ. PAA is not used because of the way Mail constructs filenames for
	.MAI and .ATT files. For a postoffice reached via modem, External processes mail
	in the following manner:
	
	1. External locks the mailbag by creating a file in the local P1 subdirectory
	  that has the .MBG file's 8-digit prefix and a .0LK suffix. This file locks
	  the mailbag for the postoffice for which External is delivering mail, thus
	  preventing other External Mail programs from processing that mailbag. For
	  example:
	
	  - 00000009.MBG gets locked in the local P1 subdirectory as 00000009.0LK.
	
	2. External creates the LOCKP1ID.PBB in the P1 subdirectory. If this fails,
	  External tries to create LOCKP1ID.PBC, then LOCKP1ID.PBD, and so forth.
	
	3. For all outgoing mail, External creates a file in the P1 subdirectory that
	  has the .MAI file's 8-digit prefix and a .PXX suffix. For example:
	
	   - For 0000000AB.MAI, 0000000AB.PBB is created.
	
	   - For 0000000AC.MAI, 0000000AC.PBB is created.
	
	4. External dials the remote postoffice.
	
	5. Send the first .MAI file, then send any associated attachments.
	
	6. For each message, the receiving External Mail program creates the .MAI file,
	  the P1 file, and the .ATT file (if there are any attachments), and then
	  updates the INQUEUE3.MBG and INQUEUE3.KEY files.
	
	7. If there are more messages to be delivered, steps 5 and 6 are repeated.
	
	8. The sending External Mail program updates the local mailbag and deletes the
	  .MAI and .ATT files if appropriate.
	
	9. External deletes the .MAI locking files created in step 3.
	
	10. External deletes the ID locking file created in Step 2.
	
	11. External deletes the MBG locking file created in Step 1.
	
	Additional query words: 2.10 3.00 3.20 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN350 kbMailPCN210
	Version           : WINDOWS:2.1,3.0,3.2,3.5
	
	=============================================================================
	
