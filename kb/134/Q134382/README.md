---
layout: page
title: "Q134382: CONN: DocErr: EXTERNAL.EXE and Manual Dir-Sync"
permalink: /kb/134/Q134382/
---

## Q134382: CONN: DocErr: EXTERNAL.EXE and Manual Dir-Sync

	Article: Q134382
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In version 3.2 of the Microsoft Mail Connection Gateway Release Notes, page 18,
	steps 3 and 9 for performing a manual directory synchronization are missing.
	
	MORE INFORMATION
	================
	
	To perform a manual directory synchronization at the directory server
	postoffice:
	
	1. Type the following; then press ENTER:
	
	  " reqmain -t -ddrive " (without the quotation marks)
	
	2. Type the following; then press ENTER:
	
	  " external -0 -ddrive -ms -mr -v -a " (without the quotation marks)
	
	  This transfers the mail into the outbound queue for the Directory
	  Synchronization (Dir-Sync) server. Use the Administrator program on each
	  requestor postoffice to check the queue for the Dir-Sync server postoffice.
	  There should be at least two $SYSTEM messages in the queue. One will be a
	  status report; the other will have a subject line that looks like the
	  following
	
	  $SYSTEM ReqTx R=R# (was r#), S = S#, I = I# ## sent
	
	3. Type the following; then press ENTER:
	
	  " external -0 -ddrive -ms -mr -v -a " (without the quotation marks)
	
	  The External Mail program actually delivers the outgoing Dir-Sync mail. If you
	  are using a gateway as the MTA, type the appropriate gateway command to
	  deliver the message.
	
	4. Type the following; then press ENTER:
	
	  " srvmain -r -ddrive " (without the quotation marks)
	
	5. To confirm that Mail for AppleTalk Networks addresses were received, compare
	  the file size and time stamp of the MSTTRANS.GLB file before and after you
	  run SRVMAIN.
	
	6. Type the following; then press ENTER:
	
	  " srvmain -t -ddrive " (without the quotation marks)
	
	  This puts AppleTalk Mail addresses into a $SYSTEM message file in the P1
	  directory.
	
	7. Check for a file in the P1 directory.
	
	8. Type the following; then press ENTER:
	
	  " External -a -0 -ddrive " (without the quotation marks)
	
	  This command again moves the mail to the outbound queues. The server's queues
	  for the requestor postoffices should show the following $SYSTEM message:
	
	  $SYSTEM SrvTx R=R# S=S# (was s#) I = I# ## sent
	
	9. Type the following; then press ENTER:
	
	  " External -a -0 -ddrive " (without the quotation marks)
	
	  This moves the P1 file into the postoffice incoming message queue. The P1 file
	  should disappear from the P1 directory after you run External.
	
	  This delivers the updates to the requestor postoffices. If a gateway is used
	  as the MTA, type the appropriate command to deliver the messages.
	
	10. Type the following; then press ENTER:
	
	  " reqmain -r -ddrive " (without the quotation marks)
	
	  This moves the addresses from the $SYSTEM message into the SRVTRANS.GLB file.
	
	11. Type the following; then press ENTER:
	
	  " import admin -ppassword -q -y -ddrive " (without the quotation marks)
	
	  This moves addresses from the SRVTRANS.GLB file into a temporary transaction
	  file and into the USR and NME files. After you run Import, the AppleTalk
	  Mail addresses should appear in the Postoffice Address List (POL), but not
	  in the Global Address List (GAL).
	
	12. Type the following; then press ENTER:
	
	  " rebuild -f -ddrive " (without the quotation marks)
	
	  This rebuilds the GAL. After you run Rebuild, the AppleTalk Mail addresses
	  should appear in the GAL.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q96060 WA0725: Directory Synchronization (Dir-Sync)
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailConn320
	Version           : :3.2
	
	=============================================================================
	
