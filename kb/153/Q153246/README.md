---
layout: page
title: "Q153246: Sms.exe Fails to Start When Attaching Sites"
permalink: /kb/153/Q153246/
---

## Q153246: Sms.exe Fails to Start When Attaching Sites

{% raw %}

	Article: Q153246
	Product(s): Microsoft Systems Management Server
	Version(s): 1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbsetup kbDespooler smsdespooler smssetup smsgeneral kbArtTypeINF
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SMS.EXE will fail to launch when Despooler fails to read "mini job to transfer
	inventory info" sent from the primary site before the central site's inventory
	information has been loaded into the central site's database.
	
	
	MORE INFORMATION
	================
	
	After the Despooler fails on the "mini job to transfer inventory info," SMS.EXE
	will fail to launch when accessing the central site database even though
	accessing the primary site database is successful. The central site will be
	rendered unusable when an attempt to attach to the central site is performed
	before the central site has the chance to inventory and update its own inventory
	information.
	
	Example DESPOOLER.LOG:
	
	  ~Executing instruction of type MICROSOFT|SMS|MINIJOBINSTRUCTION|INVENTORY
	  $$<SMS_DESPOOLER><Mon Dec 04 15:41:45 1995~><thread=E0>
	   ** Beginning INVENTORY UPDATE procedure on parent site...~
	  $$<SMS_DESPOOLER><Mon Dec 04 15:41:45 1995~><thread=E0>
	  Dataloader inbox = \\HASHSEC\SMS_SHRF\site.srv\dataload.box\deltamif.col~
	  $$<SMS_DESPOOLER><Mon Dec 04 15:41:45 1995~><thread=E0>
	  got access to SQL Server~   $$<SMS_DESPOOLER><Mon Dec 04 15:41:45
	  1995~><thread=E0>
	  Successfully loaded Site information.   $$<SMS_DESPOOLER><Mon Dec 04
	  15:41:45 1995~><thread=E0>
	  Loaded data dictionary   $$<SMS_DESPOOLER><Mon Dec 04 15:41:46
	  1995~><thread=E0>
	  Working on Identification   $$<SMS_DESPOOLER><Mon Dec 04 15:41:47
	  1995~><thread=E0>
	   Err>General SQL Server error: Check messages from the SQL Server.~
	  $$<SMS_DESPOOLER><Mon Dec 04 15:41:50 1995~><thread=E0>
	   Err>Attempt to initiate a new SQL Server operation with results pending.~
	  $$<SMS_DESPOOLER><Mon Dec 04 15:41:50 1995~><thread=E0>
	   Err>General SQL Server error: Check messages from the SQL Server.~
	  $$<SMS_DESPOOLER><Mon Dec 04 15:41:50 1995~><thread=E0>
	   Msg>Attempt to insert the value NULL into column 'NextMachineID', table
	  'SMS.dbo.SMSData'; column does not allow nulls.  UPDATE fails.~
	  $$<SMS_DESPOOLER><Mon Dec 04 15:41:50 1995~><thread=E0>
	   Cmd>drop table #MachineIDs    $$<SMS_DESPOOLER><Mon Dec 04 15:41:50
	  1995~><thread=E0>
	   Msg>Command has been aborted.~   $$<SMS_DESPOOLER><Mon Dec 04 15:41:50
	  1995~><thread=E0>
	   Cmd>drop table #MachineIDs    $$<SMS_DESPOOLER><Mon Dec 04 15:41:50
	  1995~><thread=E0>
	   Msg>DROP TABLE command not allowed within multi-statement transaction.~
	  $$<SMS_DESPOOLER><Mon Dec 04 15:41:50 1995~><thread=E0>
	   Cmd>drop table #MachineIDs    $$<SMS_DESPOOLER><Mon Dec 04 15:41:50
	  1995~><thread=E0>
	   Err>General SQL Server error: Check messages from the SQL Server.~
	  $$<SMS_DESPOOLER><Mon Dec 04 15:41:50 1995~><thread=E0>
	   Msg>CREATE TRIGGER command not allowed within multi-statement
	  transaction.~   $$<SMS_DESPOOLER><Mon Dec 04 15:41:50 1995~><thread=E0>
	   Cmd> CREATE TRIGGER MachineDataTable_ins ON MachineDataTable FOR insert AS
	  if (select distinct m.dwMachineID from Machines m, inserted i where
	  m.dwMachineID = i.dwMachineID) = NULL      BEGIN        INSERT Machines
	  (dwMachineID, ArchitectureKey) (selec   $$<SMS_DESPOOLER><Mon Dec 04
	  15:41:50 1995~><thread=E0>
	   Cmd>t distinct dwMachineID,         ArchitectureKey from inserted)
	  END    $$<SMS_DESPOOLER><Mon Dec 04 15:41:50 1995~><thread=E0>
	  Couldn't load all groups~   $$<SMS_DESPOOLER><Mon Dec 04 15:41:50
	  1995~><thread=E0>
	  Logging an event for the error.~   $$<SMS_DESPOOLER><Mon Dec 04 15:41:50
	  1995~><thread=E0>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. This problem has been corrected in Systems Management
	Server version 1.2.
	
	Additional query words: prodsms 1.00 1.10
	
	======================================================================
	Keywords          : kbsetup kbDespooler smsdespooler smssetup smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : :1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
