---
layout: page
title: "Q191301: SMS: Duplicate Datakeys in SMS Database After SQL Deadlock"
permalink: /kb/191/Q191301/
---

## Q191301: SMS: Duplicate Datakeys in SMS Database After SQL Deadlock

{% raw %}

	Article: Q191301
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbDataLoader smsdataloader
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Systems Management Server Dataloader service produces duplicate Datakeys in
	the SMS database when a deadlock occurs and the Dataloader process is selected
	as a deadlock victim.
	
	Additionally, the Dataloader log (when SQL tracing is enabled) will contain
	errors similar to the following messages:
	
	  Err>General SQL Server error: Check messages from the SQL Server.~
	  $$<SMS_INVENTORY_DATA_LOADER><Thu Oct 16 07:50:19
	  1997~><thread=61>
	
	  Msg>Your server command (process id 10) was deadlocked with another process
	  and has been chosen as deadlock victim. Re-run your command~~
	  $$<SMS_INVENTORY_DATA_LOADER><Thu Oct 16 07:50:19
	  1997~><thread=61>
	
	  Cmd> declare @NextInstanceKey int select @NextInstanceKey = NextInstanceKey
	  from GroupMap where GroupKey = 1 and ArchitectureKey = 5 insert into
	  MachineDataTable (ArchitectureKey, GroupKey, dwMachineID, SpecificKey,
	  CommonKey, InstanceKey, TimeKey) select
	  $$<SMS_INVENTORY_DATA_LOADER><Thu Oct 16 07:50:19
	  1997~><thread=61>
	
	  Cmd>5,1,dwMachineID+6099932, SpecificKey+120354,
	  isnull(t2.newdatakey,0),InstanceKey + @NextInstanceKey, getdate() from
	  _Identification_SPEC t1, _Identification_COMM t2 where t1.CommonKey *=
	  t2.datakey and SpecificKey > 0 insert into MachineDataTable (Archite
	  $$<SMS_INVENTORY_DATA_LOADER><Thu Oct 16 07:50:19
	  1997~><thread=61>
	
	  Cmd>ctureKey, GroupKey, dwMachineID, SpecificKey, CommonKey, InstanceKey,
	  TimeKey) select 5,1,dwMachineID+6099932, 0,
	  isnull(t2.newdatakey,0),InstanceKey + @NextInstanceKey, getdate() from
	  _Identification_SPEC t1, _Identification_COMM t2 where t1.CommonKey
	  $$<SMS_INVENTORY_DATA_LOADER><Thu Oct 16 07:50:19
	  1997~><thread=61>
	
	  Cmd>*= t2.datakey and SpecificKey = 0 select @NextInstanceKey =
	  isnull(max(InstanceKey),0)+1 from MachineDataTable where GroupKey = 1 and
	  ArchitectureKey = 5 update GroupMap set NextInstanceKey = @NextInstanceKey
	  where GroupKey = 1 and ArchitectureKey = 5
	  $$<SMS_INVENTORY_DATA_LOADER><Thu Oct 16 07:50:19
	  1997~><thread=61>
	
	  Msg>The commit transaction request has no corresponding BEGIN TRANSACTION.~
	  $$<SMS_INVENTORY_DATA_LOADER><Thu Oct 16 07:50:19
	  1997~><thread=61>
	
	  Cmd> declare @NextInstanceKey int select @NextInstanceKey = NextInstanceKey
	  from GroupMap where GroupKey = 1 and ArchitectureKey = 5 insert into
	  MachineDataTable (ArchitectureKey, GroupKey, dwMachineID, SpecificKey,
	  CommonKey, InstanceKey, TimeKey) select
	  $$<SMS_INVENTORY_DATA_LOADER><Thu Oct 16 07:50:19
	  1997~><thread=61>
	
	  Cmd>5,1,dwMachineID+6099932, SpecificKey+120354,
	  isnull(t2.newdatakey,0),InstanceKey + @NextInstanceKey, getdate() from
	  _Identification_SPEC t1, _Identification_COMM t2 where t1.CommonKey *=
	  t2.datakey and SpecificKey > 0 insert into MachineDataTable (Archite
	  $$<SMS_INVENTORY_DATA_LOADER><Thu Oct 16 07:50:19
	  1997~><thread=61>
	
	  Cmd>ctureKey, GroupKey, dwMachineID, SpecificKey, CommonKey, InstanceKey,
	  TimeKey) select 5,1,dwMachineID+6099932, 0,
	  isnull(t2.newdatakey,0),InstanceKey + @NextInstanceKey, getdate() from
	  _Identification_SPEC t1, _Identification_COMM t2 where t1.CommonKey
	  $$<SMS_INVENTORY_DATA_LOADER><Thu Oct 16 07:50:19
	  1997~><thread=61>
	
	  Cmd>*= t2.datakey and SpecificKey = 0 select @NextInstanceKey =
	  isnull(max(InstanceKey),0)+1 from MachineDataTable where GroupKey = 1 and
	  ArchitectureKey = 5 update GroupMap set NextInstanceKey = @NextInstanceKey
	  where GroupKey = 1 and ArchitectureKey = 5
	  $$<SMS_INVENTORY_DATA_LOADER><Thu Oct 16 07:50:19
	  1997~><thread=61>
	
	  ~Couldn't load all groups $$<SMS_INVENTORY_DATA_LOADER><Thu Oct 16
	  07:50:19 1997~><thread=61>
	
	  Logging an event for the error.~ $$<SMS_INVENTORY_DATA_LOADER><Thu
	  Oct 16 07:50:19 1997~><thread=61>
	
	  ~Error updating child site inventory, will retry in 360 minutes.
	  $$<SMS_INVENTORY_DATA_LOADER><Thu Oct 16 07:50:19
	  1997~><thread=61>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 1.2. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms sp sp4 data loader keys
	
	======================================================================
	Keywords          : kbDataLoader smsdataloader 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
