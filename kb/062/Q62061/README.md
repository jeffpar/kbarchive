---
layout: page
title: "Q62061: Format of Import Network Drivers Disk in OS/2 LAN Man 2.0"
permalink: kb/062/Q62061/
---

## Q62061: Format of Import Network Drivers Disk in OS/2 LAN Man 2.0

	Article: Q62061
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	To support the "Import network drivers" option of the OS/2 LAN Manager versions
	2.0, 2.1, 2.1a, and 2.2 Setup program, you must have a floppy disk with the
	following directory setup (it must be exact, or OS/2 LAN Manager will
	GP-fault):
	
	  A: ---
	       |  (or MSLANMAN.DOS)
	       |--MSLANMAN.OS2 --
	                        |
	                        |--DRIVERS --
	                                    |
	                                    |--NIF
	                                    |--<Your driver name>
	
	Within the \NIF subdirectory, there must be a file for every configuration you
	plan to offer the user. Within those files, the following format must be
	observed (use the OS/2 UB Drivers disk, UB8.NIF file, as an example):
	
	  Model = <Name to appear as user option>
	  Path = <Pathname, in relation to A:\MSLANMAN.OS2\DRIVERS directory
	          for location of drivers (for example, UB)>
	  DeviceDriver = <Name of DEVICE as it should appear in CONFIG.SYS>000
	  DeviceName = <Name of protocol (for example, netbeui$ or ubxns$)>
	  Type = <Driver type (for example, MONO - monolithic, NDIS - MAC
	          driver)>
	
	All of the files referenced by the .NIF files should be placed within the
	"<Your driver name>" subdirectory.
	
	This is the format that should be followed by all third-party driver vendors when
	constructing a disk to include with OS/2 LAN Manager version 2.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
