---
layout: page
title: "Q152468: Troubleshooting Dr. Watson Errors in SMSEXEC"
permalink: /kb/152/Q152468/
---

## Q152468: Troubleshooting Dr. Watson Errors in SMSEXEC

{% raw %}

	Article: Q152468
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SMSEXEC can fail with a Dr. Watson error when either the Inventory Processor,
	Inventory Dataloader, or Despooler attempts to process corrupted files.
	
	Memory read and write errors are associated with the Dr. Watson problem.
	
	CAUSE
	=====
	
	The SMSEXEC process can fail with the Dr. Watson error if a RAW file, a MIF
	file, or a NIL file are corrupted.
	
	RAW Files
	---------
	
	RAW files are located in the Sms\Logon.srv\Inventry.box directory or the
	Sms\Site.srv\Inventry.box directory. The Inventory Agent program reports the
	inventory for the client by creating a RAW Inventory Agent file (*.raw) and
	placing this file in the Inventry.box directory of the SMS_SHR share on the
	client's logon server.
	
	MIF Files
	---------
	
	MIF files are located in the Sms\Site.srv\Dataload.box\Deltamif.col directory. A
	management information file (MIF) is an ASCII text file that contains
	information about a computer component. A MIF is a description of the component
	that is available to other applications through a standard management
	interface.
	
	NIL Files
	---------
	
	NIL files are located in the Sms\Site.srv\Despool.box\Receive. Instruction (NIL)
	files can have any of the following extensions: *.ins, *.sni, *.ist, or *.nil.
	
	A *.ins or *.sni instruction becomes *.ist or *.nil when the Systems Management
	Server Despooler starts processing the instruction. A *.ist file is for
	instructions that have an accompanying package file; *.nil is for stand-alone
	instructions.
	
	Use the following steps to determine what is causing the problem:
	
	1. Verify the existence of a DS_00000.NIL file in the
	  \Sms\Site.srv\Despool.box\Receive directory. If this file exists, remove it.
	  Check the Despool log file and verify which package ID it was failing on.
	  Restart SMSEXEC. You may want to remove the problem package and try
	  resubmitting it.
	
	2. Create a temporary directory in the root directory. Move the MIF files from
	  Sms\Site.srv\Dataload.box\Deltamif.col to the temporary directory. Start
	  SMSEXEC and determine whether the failure still occurs. If it does not, begin
	  moving the MIF files back to the Deltamif.col directory, moving the newest
	  RAW filess first, based on the file creation date. Move the MIF files in
	  groups of approximately 10 to 20.
	
	  After the system fails, take the first MIF and move it back to the temporary
	  directory. Restart SMSEXEC. Repeat this process until all the bad MIF files
	  have been isolated, and then edit them to determine which clients are causing
	  the failure. Troubleshoot the clients to determine why they are creating bad
	  MIF files (bad hardware, bad UINFO/Custom MIF, and so on).
	
	3. Create a temporary directory in the root directory. Move the RAW files from
	  Sms\Logon.srv\Inventry.box and \Sms\Site.srv\Inventry.box to the temporary
	  directory. Note that we are only concerned about RAW files that have made it
	  to the failing server; we are not concerned about logon servers with
	  backed-up RAW files.
	
	  Start SMSEXEC and determine whether the crash still occurs. If it does not,
	  begin moving the RAW files back to their originating directory, moving the
	  newest first, based on file creation date. Move the MIF files in groups of
	  approximately 10 to 20.
	
	  After the system fails, take the first RAW and move it back to the Temporary
	  directory. Restart SMSEXEC. Repeat this process until all bad RAW files have
	  been isolated, and then edit them to determine which clients are causing the
	  failure. Troubleshoot the clients to determine why they are creating bad RAW
	  files (bad hardware, bad UINFO/Custom MIF, and so on).
	
	Additional query words: prodsms sms NIL SMSEXEC.EXE crash crashing
	
	======================================================================
	Keywords          : kbnetwork kbDatabase smsdatabase 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
