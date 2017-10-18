---
layout: page
title: "Q253233: INFO: NdisQueryMapRegisterCount Is Obsolete on Windows 2000"
permalink: kb/253/Q253233/
---

## Q253233: INFO: NdisQueryMapRegisterCount Is Obsolete on Windows 2000

	Article: Q253233
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbnetwork kbDDK kbNDIS kbOSWin2000 kbDSupport kbGrpDSNTDDK
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The NdisQueryMapRegisterCount function does not provide useful information on a
	Windows 2000-based computer.
	
	MORE INFORMATION
	================
	
	On a Microsoft Windows NT 4.0-based computer, busmaster NIC miniports call the
	NdisQueryMapRegisterCount function and obtain information about the total number
	of available map registers on the system. This information can assist a driver
	to make decisions about how many map registers to attempt to allocate with the
	NdisMAllocateMapRegisters function. Regardless of this information, driver
	writers have had to work within the restriction that they must operate with less
	than the desired number of map registers.
	
	Under Windows 2000, the NdisQueryMapRegisterCount function does not always return
	the total number of map registers available in the system; the function may
	return an invalid value. Driver writers should not use this function.
	
	Here is an example of how driver writers can allocate map registers. Driver
	writers can call the NdisMAllocateMapRegisters function in a loop, reducing the
	number of map registers requested from the ultimate desired number to the
	minimum number acceptable in each iteration until the function succeeds or the
	loop terminates. If the minimum is not available, the driver should write an
	event log entry and return an appropriate error code from the MiniportInitialize
	handler.
	
	Driver writers should also refer to the NdisMInitializeScatterGatherDma function
	for an alternative DMA approach, where the miniport driver does not have to
	manage map registers:
	
	  Adapter->MapRegisters = MAX_MAP_REGISTERS_NEEDED;
	
	        while(Adapter->MapRegisters > (MIN_MAP_REGISTERS_NEEDED - 1))
	        {
	               Status = NdisMAllocateMapRegisters(
	                              Adapter->AdapterHandle,   // handle input to MiniportInitialize.
	                              0,
	                              NDIS_DMA_32BITS,          // address size that the NIC uses for DMA operations
	                              Adapter->MapRegisters,    // maximum number of map registers
	                              MAX_PHYSICAL_MAPPINGS);   // maximum number of bytes that the NIC can
	                                                        // transfer in a single DMA operation
	
	                // If Call succeeded, Maximum number of map registers
	                // requested have been allocated... else the requested number
	                // of map registers could not be allocated due to system
	                // resource constraints.
	
	                if(Status == NDIS_STATUS_SUCCESS)
	                {
	                      break;
	                }
	
	                // Else Reduce the request size and try again till you succeed or are out of resources.
	                Adapter->MapRegisters--;
	        }
	
	REFERENCES
	==========
	
	NdisMAllocateMapRegisters() NdisMInitializeScatterGatherDma()
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbDDK kbNDIS kbOSWin2000 kbDSupport kbGrpDSNTDDK 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:
	Issue type        : kbinfo
	
	=============================================================================
	
