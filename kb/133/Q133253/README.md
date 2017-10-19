---
layout: page
title: "Q133253: Generating SQL Scripts for SMS Views"
permalink: /kb/133/Q133253/
---

## Q133253: Generating SQL Scripts for SMS Views

	Article: Q133253
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2,6.0
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SMSVIEW creates various views that can be used when querying the Systems
	Management Server SQL Database. The SQL Scripts used to create these views can
	be dumped using Microsoft SQL Enterprise Manager (in Microsoft SQL Server 6.0).
	
	MORE INFORMATION
	================
	
	To generate the SQL scripts to create the SMS views:
	
	1. Start SQL Enterprise Manager.
	
	2. If the server where the Systems Management Server database resides is not
	  already registered in SQL Enterprise Manager, register it as follows:
	
	  a. Select Register Server from the Server menu.
	
	  b. Provide the server name and valid logon information (by default, the valid
	     logon is SA with no password and Standard Security).
	
	  c. Choose Register.
	
	3. In the Server Manager window, select the server you just registered (there
	  may be a slight delay as a connection to this server is established).
	
	4. Choose + in the following order:
	
	  a. The Server's name in the Server Manager window.
	
	  b. Databases to get to the Systems Management Server database.
	
	  c. The database that contains the Systems Management Server data.
	
	  The name of the SMS database in the Server Manager window should be selected.
	
	5. Select Generate SQL Scripts from the Object menu.
	
	6. In the Generate SQL Scripts - <servername>\<database name> dialog
	  box, choose All Views for Scripting Objects. This fills in the name of each
	  view in the list box at the bottom right portion of the dialog box.
	
	7. Ensure Object Creation and Object Drop are selected for Scripting Options.
	
	8. If you prefer scripts for each view to be placed in a separate file, select
	  Per Object in Scripting Options. Otherwise, select Single File.
	
	9. Choose Preview (there is a short wait as the scripts are generated). Save the
	  scripts as text files or choose Close to go back to the Generate SQL Scripts
	  dialog box without saving the scripts).
	
	The following displays the resulting output (in Systems Management Server 1.1,
	Build 682):
	
	  /****** Object:  View dbo.vDisk    Script Date: 7/5/95 4:30:43 AM ******/ 
	  if exists (select * from sysobjects where id = object_id('dbo.vDisk') and
	
	  sysstat & 0xf = 2)
	  drop view dbo.vDisk
	
	  GO
	
	  Create View vDisk as select dwMachineID , Disk_SPEC.__Disk_Full0 ,
	  Disk_COMM.Disk_Index0 , Disk_COMM.File_System0 ,
	  Disk_SPEC.Free_Storage__MByte_0 , Disk_SPEC.Sectors0 ,
	  Disk_SPEC.Serial_Number0 , Disk_SPEC.Storage_Size__MByte_0 ,
	  Disk_COMM.Storage_Type0 , Disk_SPEC.Storage_Used__MByte_0 ,
	  Disk_SPEC.Volume_Name0 from  MachineDataTable  ,Disk_COMM   , Disk_SPEC
	  where Disk_COMM.datakey =*  CommonKey and Disk_SPEC.datakey =* SpecificKey
	  and ArchitectureKey = 5 and GroupKey = 8
	
	  GO
	
	  /****** Object:  View dbo.vEnvironment    Script Date: 7/5/95 4:30:43 AM
	  ******/ 
	  if exists (select * from sysobjects where id =
	  object_id('dbo.vEnvironment')
	
	  and sysstat & 0xf = 2)
	  drop view dbo.vEnvironment
	
	  GO
	
	  Create View vEnvironment as select dwMachineID ,
	  Environment_SPEC.Environment_String0 , Environment_SPEC.Value0 from
	  MachineDataTable  ,Environment_COMM   , Environment_SPEC where
	  Environment_COMM.datakey =*  CommonKey and Environment_SPEC.datakey =*
	  SpecificKey and ArchitectureKey = 5 and GroupKey = 12
	
	  GO
	
	  /****** Object:  View dbo.vGroupNames    Script Date: 7/5/95 4:30:44 AM
	  ******/ 
	  if exists (select * from sysobjects where id = object_id('dbo.vGroupNames')
	  and sysstat & 0xf = 2)
	  drop view dbo.vGroupNames
	
	  GO
	
	  Create View vGroupNames as select  GM.GroupName   FROM ArchitectureMap AM,
	  GroupMap GM  WHERE  GM.ArchitectureKey = AM.ArchitectureKey AND
	  ((AM.Mode=0))
	
	  GO
	
	  /****** Object:  View dbo.vIdentification    Script Date: 7/5/95 4:30:44 AM
	  ******/ 
	  if exists (select * from sysobjects where id =
	  object_id('dbo.vIdentification') and sysstat & 0xf = 2)
	  drop view dbo.vIdentification
	
	  GO
	
	  Create View vIdentification as select dwMachineID ,
	  Identification_SPEC.Domain0 , Identification_SPEC.LogOn_Name0 ,
	  Identification_SPEC.Name0 , Identification_SPEC.NetCardID0 ,
	  Identification_SPEC.Site0 , Identification_SPEC.SMSID0 ,
	  Identification_SPEC.SMSLocation0 , Identification_SPEC.SystemRole0 ,
	  Identification_SPEC.SystemType0 from  MachineDataTable
	  ,Identification_COMM
	
	  , Identification_SPEC where Identification_COMM.datakey =*  CommonKey and
	  Identification_SPEC.datakey =* SpecificKey and ArchitectureKey = 5 and
	  GroupKey = 1
	
	  GO
	
	  /****** Object:  View dbo.vMouse    Script Date: 7/5/95 4:30:44 AM ******/ 
	  if exists (select * from sysobjects where id = object_id('dbo.vMouse') and
	  sysstat & 0xf = 2)
	  drop view dbo.vMouse
	
	  GO
	
	  Create View vMouse as select dwMachineID , Mouse_COMM.Hardware_Installed0 ,
	  Mouse_COMM.Language0 , Mouse_COMM.Manufacturer0 ,
	  Mouse_COMM.Mouse_Hardware_Type0 , Mouse_COMM.Number_of_Buttons0 from
	  MachineDataTable  ,Mouse_COMM   , Mouse_SPEC where Mouse_COMM.datakey =*
	  CommonKey and Mouse_SPEC.datakey =* SpecificKey and ArchitectureKey = 5 and
	  GroupKey = 4
	
	  GO
	
	  /****** Object:  View dbo.vNetcard    Script Date: 7/5/95 4:30:45 AM
	  ******/ 
	
	  if exists (select * from sysobjects where id = object_id('dbo.vNetcard')
	  and
	
	  sysstat & 0xf = 2) drop view dbo.vNetcard
	
	  GO
	
	  Create View vNetcard as select dwMachineID , Netcard_SPEC.IRQ0 ,
	  Netcard_COMM.Manufacturer0 , Netcard_SPEC.Port_Address0 from
	  MachineDataTable  ,Netcard_COMM   , Netcard_SPEC where Netcard_COMM.datakey
	  =*  CommonKey and Netcard_SPEC.datakey =* SpecificKey and ArchitectureKey =
	  5 and GroupKey = 11
	
	  GO
	
	  /****** Object:  View dbo.vNetwork    Script Date: 7/5/95 4:30:45 AM
	  ******/ 
	
	  if exists (select * from sysobjects where id = object_id('dbo.vNetwork')
	  and
	
	  sysstat & 0xf = 2) drop view dbo.vNetwork
	
	  GO
	
	  Create View vNetwork as select dwMachineID , Network_COMM.Default_Gateway0
	  ,
	
	  Network_SPEC.IP_Address0 , Network_SPEC.IPX_Address0 ,
	  Network_COMM.LogOn_Name0 , Network_COMM.Major_Version0 ,
	  Network_COMM.Minor_Version0 , Network_SPEC.Network_Active0 ,
	  Network_COMM.Network_Type0 , Network_COMM.Subnet_Mask0 from
	  MachineDataTable  ,Network_COMM   , Network_SPEC where Network_COMM.datakey
	  =*  CommonKey and Network_SPEC.datakey =* SpecificKey and ArchitectureKey =
	  5 and GroupKey = 10
	
	  GO
	
	  /****** Object:  View dbo.vOperating_System    Script Date: 7/5/95 4:30:45
	  AM ******/ 
	  if exists (select * from sysobjects where id =
	
	  object_id('dbo.vOperating_System') and sysstat & 0xf = 2)
	  drop view dbo.vOperating_System
	
	  GO
	
	  Create View vOperating_System as select dwMachineID ,
	
	  Operating_System_COMM.Build_Number0 , Operating_System_COMM.Build_Type0 ,
	  Operating_System_COMM.Country_Code0 ,
	  Operating_System_SPEC.Installation_Date0 ,
	  Operating_System_COMM.Language_ID0 ,
	  Operating_System_COMM.Operating_System_Name0 ,
	  Operating_System_COMM.Registered_Organization0 ,
	  Operating_System_SPEC.Registered_Owner0 ,
	  Operating_System_SPEC.System_Root0
	
	  , Operating_System_SPEC.System_Start_Options0 ,
	  Operating_System_COMM.Version0 from  MachineDataTable
	  ,Operating_System_COMM   , Operating_System_SPEC where
	  Operating_System_COMM.datakey =*  CommonKey and
	  Operating_System_SPEC.datakey =* SpecificKey and ArchitectureKey = 5 and
	  GroupKey = 7
	
	  GO
	
	  /****** Object:  View dbo.vPC_Memory    Script Date: 7/5/95 4:30:46 AM
	  ******/ 
	  if exists (select * from sysobjects where id = object_id('dbo.vPC_Memory')
	  and sysstat & 0xf = 2)
	  drop view dbo.vPC_Memory
	
	  GO
	
	  Create View vPC_Memory as select dwMachineID ,
	  PC_Memory_SPEC.Page_File_Name0 , PC_Memory_SPEC.Page_File_Size__MByte_0 ,
	  PC_Memory_SPEC.Total_Paging_File_Space__0 ,
	  PC_Memory_SPEC.Total_Physical_Memory__KB0 from  MachineDataTable
	  ,PC_Memory_COMM   , PC_Memory_SPEC where PC_Memory_COMM.datakey =*
	  CommonKey and PC_Memory_SPEC.datakey =* SpecificKey and ArchitectureKey = 5
	  and GroupKey = 9
	
	  GO
	
	  /****** Object:  View dbo.vProcessor    Script Date: 7/5/95 4:30:46 AM
	  ******/ 
	  if exists (select * from sysobjects where id = object_id('dbo.vProcessor')
	  and sysstat & 0xf = 2)
	  drop view dbo.vProcessor
	
	  GO
	
	  Create View vProcessor as select dwMachineID ,
	  Processor_COMM.Processor_Name0 , Processor_COMM.Processor_Type0 ,
	  Processor_COMM.Quantity0 from  MachineDataTable  ,Processor_COMM   ,
	  Processor_SPEC where Processor_COMM.datakey =*  CommonKey and
	  Processor_SPEC.datakey =* SpecificKey and ArchitectureKey = 5 and
	  GroupKey = 6
	
	  GO
	
	  /****** Object:  View dbo.vServices    Script Date: 7/5/95 4:30:46 AM
	  ******/ 
	  if exists (select * from sysobjects where id = object_id('dbo.vServices')
	  and sysstat & 0xf = 2)
	  drop view dbo.vServices
	
	  GO
	
	  Create View vServices as select dwMachineID , Services_SPEC.EXE_Path0 ,
	  Services_COMM.Name0 , Services_SPEC.Start_Name0 , Services_COMM.Start_Type0
	  , Services_COMM.State0 from  MachineDataTable  ,Services_COMM   ,
	  Services_SPEC where Services_COMM.datakey =*  CommonKey and
	  Services_SPEC.datakey =* SpecificKey and ArchitectureKey = 5 and
	  GroupKey = 13
	
	  GO
	
	  /****** Object:  View dbo.vVideo    Script Date: 7/5/95 4:30:47 AM ******/ 
	  if exists (select * from sysobjects where id = object_id('dbo.vVideo') and
	
	  sysstat & 0xf = 2)
	  drop view dbo.vVideo
	
	  GO
	
	  Create View vVideo as select dwMachineID , Video_COMM._nd_Adapter_Type0 ,
	  Video_COMM.Adapter_Type0 , Video_SPEC.Bios_Date0 ,
	  Video_COMM.Current_Video_Mode0 , Video_COMM.Display_Type0 ,
	  Video_COMM.Manufacturer0 , Video_COMM.Max_Rows0 from  MachineDataTable
	  ,Video_COMM   , Video_SPEC where Video_COMM.datakey =*  CommonKey and
	  Video_SPEC.datakey =* SpecificKey and ArchitectureKey = 5 and GroupKey = 5
	
	  GO
	
	  /****** Object:  View dbo.vWorkstationStatus    Script Date: 7/5/95 4:30:47
	  AM ******/ 
	  if exists (select * from sysobjects where id =
	  object_id('dbo.vWorkstationStatus') and sysstat & 0xf = 2)
	  drop view dbo.vWorkstationStatus
	
	  GO
	
	  Create View vWorkstationStatus as select dwMachineID ,
	  WorkstationStatus.Failed_Hardware_Checks0 ,
	  WorkstationStatus.Files_Not_Installed0 , WorkstationStatus.LastHWScan ,
	  WorkstationStatus.LastSWScan , WorkstationStatus.Standalone_Workstation0 ,
	  WorkstationStatus.System_Files_Not_Modified0 from  MachineDataTable  ,
	  WorkstationStatus where WorkstationStatus.datakey =* SpecificKey and
	  ArchitectureKey = 5 and GroupKey = 2
	
	  GO
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbDatabase smsdatabase 
	Technology        : kbSMSSearch kbSMS110 kbSMS120
	Version           : winnt:1.1,1.2,6.0
	
	=============================================================================
	
