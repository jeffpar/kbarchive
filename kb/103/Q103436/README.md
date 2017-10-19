---
layout: page
title: "Q103436: Small Computer System Interface (SCSI) Bus Configuration"
permalink: /kb/103/Q103436/
---

## Q103436: Small Computer System Interface (SCSI) Bus Configuration

	Article: Q103436
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	The following table describes the configuration attributes of the
	standard SCSI interface.
	
	          Bit   Cable  Pin    Max Transfer  Max SCSI
	
	Standard   Width  Name   Cnt.  Rate MB/sec   Devices  Description
	-----------------------------------------------------------------
	
	SCSI-1      8      A     50       5            8      Asynchronous
	SCSI-2      8      A     50       10           8      fast
	SCSI-2      16     A+B   50+68    20           8      fast+wide **
	SCSI-2      32     A+B   50+68    40           8      fast+wide **
	SCSI-3      8      A     50       10           8      fast
	SCSI-3      16     P     68       20           16     fast+wide *
	SCSI-3      32     P+Q   68+68    40           32     fast+wide **
	
	*  = with 1 cable
	** = with 2 cables
	
	NOTE: Windows NT currently supports only eight SCSI IDs.
	
	Standard: The name of the SCSI standard as defined by ANSI.
	
	Bit width: The number of bits that gets transferred by the SCSI
	bus during the data transfer phases.
	
	Cable Names: A is most common, P is getting more popular, A+B is
	currently not popular due to cost and space issues.
	
	Pin Count: The number of pins in the cable. Refer to the above table
	for specific numbers.
	
	Max Transfer Rate (MB/sec): Number of bits transferred over the
	SCSI bus in one second.
	
	Max SCSI Devices: The Maximum number of devices that can be
	connected to the SCSI bus with one host adapter installed.
	
	Description:
	
	  Asynchronous: A handshaking protocol that requires a
	  handshake for every byte transferred (Synchronous  transfers a
	  series of bytes before handshaking occurs, which speeds data
	  transfer rate)
	
	  Fast: Fast SCSI is an option that doubles the synchronous data
	  transfer speed. The speed is achieved by removing excess margins
	  from certain times and delays. To use the fast SCSI option, high
	  quality cables are required. This option is compatible with normal
	  synchronous SCSI and has:
	
	  - Up to 10 (megabytes) MB/second over an 8 bit bus.
	
	  - Synchronous Data transfer negotiation required.
	
	  - Single-ended implementation recommendations: max cable length of 3 meters
	  and active terminators.
	
	  Wide: Wide SCSI is an option that adds a second SCSI cable of 68
	  conductors. This cable provides a data path for 16- or 32-bit data.
	  This path has separate handshake signals and is for data transfer
	  only. The transfer rate is two or four times the present transfer
	  rate of SCSI-1. With the second cable, SCSI-2 remains compatible
	  with the 8-bit SCSI.
	
	Additional query words: prodnt 3.10 specification summary port Connection daisy chain address
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51
	
	=============================================================================
	
