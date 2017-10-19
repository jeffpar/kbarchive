---
layout: page
title: "Q251227: Interpretation of Polaris ESCON Channel Adapter Error Messages"
permalink: /kb/251/Q251227/
---

## Q251227: Interpretation of Polaris ESCON Channel Adapter Error Messages

	Article: Q251227
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11 (all versions),3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): sna4
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This "More Information" section of this article lists Polaris SNA Link Service
	and Device Driver error codes that may be posted to the event log.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	MORE INFORMATION
	================
	
	Event 23
	
	These codes correspond to a connection failure reported by the link service
	to SNA Server.  SNA Server posts an Event 23 message containing one of the
	following outage codes:
	
	Common codes:
	
	0003 - Mainframe disconnected connection.  This can happen when the
	      mainframe is IPLed or the PU is deactivated in VTAM.
	0004 - Unable to open the link, probably because it is not online with the
	      mainframe.
	0005 - There was a fault on the channel.
	
	These codes indicate an operating-system failure or link service program error:
	
	0001 - ProcessLink Wait failed.
	0002 - Unable to query driver event.
	0008 - Driver reported an unknown event.
	0009 - Driver was unable to send the reply to the XID.
	000B - WriteFileEx failed - we could not send a write buffer to the
	      driver (mainframe read data).
	000C - ReadFileEx failed - we could not send a read buffer to the
	      driver (mainframe write data).
	000D - Unable to expand a packet into elements.
	000E - Unable to expand XID into elements.
	000F - Invalid SNA event on hold queue.
	
	For the following codes, refer to the driver errors below:
	
	001A
	001B
	001C
	001D
	0019
	0020
	
	For example, if you see code 0020, you should look for it in the list
	below.  In the case of 0020, which is really 0x20 (hex), it means
	system reset.  
	
	Event 394
	
	These errors correspond to errors reported by the driver to the link
	service and usually appear as Event 394 from the SNA CHANNEL Link.
	The message includes the text "Device Driver Reported Error XX."  As
	mentioned above, some of these errors are also reported as the link
	failure code in Event 23.
	
	Polaris 3174 Device Driver Error Codes
	
	(1) Hardware or software problem.  If hard rebooting does not fix it
	   or it occurs regularly, then there is probably a serious problem
	   that we should be made aware of.
	
	(2) This error code is not currently used.
	
	0x00 - Normal status
	
	0x01 - Invalid device for call (1)
	
	0x02 - Invalid state (1)
	
	0x03 - InExec is set (1)
	
	0x04 - InExec did not clear (1)
	
	0x05 - Invalid Buffer size (1)
	
	0x06 - Unable to set event (1)
	
	0x07 - Failed DownLoadM
	      The driver could not download the microcode.
	      ESCON: down6900.bin
	      BUS & TAG: downms.bin
	
	0x08 - Failed DownLoadX
	      The driver could not download the FPGA
	      ESCON: down960f.bin
	      BUS & TAG: downxs.bin
	
	0x09 - Failed NonInteractive Diag
	
	0x0A - Invalid number of devices configured
	      Likely too many devices have been configured in the link
	      service configuration.
	
	0x0B - Did not find unit (1)
	
	0x0C - The channel interface could not go online because the channel is down.
	      Make sure all devices are varied online.
	
	0x0D - ChExec did not clear (1)
	
	0x0E - CuExec did not clear (1)
	
	0x0F - Could not insert Queue. (1)
	
	0x10 - Could not go online because online switch is offline.
	      Check the online switch.
	
	0x11 - Unexpected InitFunc error. (1)
	
	0x12 - DRQ did not clear. (1)
	
	0x13 - Fifo did not set. (1)
	
	0x14 - WAITDMA did not clear. (1)
	
	0x15 - Wrong state to set up DMA. (2)
	
	0x16 - Unexpected ChFunc error. (1)
	
	0x17 - Unable to call IoAllocateAdapterChannel. (1)
	
	0x18 - No MDl available. (1)
	
	0x19 - Offline due to SYSRESET.
	      The mainframe issued a system reset.
	
	0x1A - Offline due to ILIFUNC. (1)
	      The driver issued an illegal function to the board.
	
	0x1B - Offline due to FAULT (ESCON).
	
	0x1C - Offline due to SWITCH.
	      The Offline switch was put in the offline position while the
	      board was online.
	
	0x1D - Offline due to TOUT.
	      The board went offline because the driver was unable to respond
	      to an interrupt within a few seconds.  This can happen if the
	      Windows NT Server is frozen for a few seconds or more, which in turn
	      could be caused by excessive network traffic or a network outage.
	
	0x1E - Selective reset
	      May indicate a protocol problem, wrong device address or
	      invalid status from the Channel Interface.
	
	0x1F - Interface disconnect
	      The Channel has sent an Interface Disconnect frame.  The
	      Channel Interface has aborted the current operation.
	
	0x20 - System Reset (ESCON).  Indicates that all devices associated with an
	      image need to be reset.  The Channel Interface does not go offline.
	      This can happen when the mainframe is being IPLed, or perhaps when
	      the CHPID is taken down.
	
	0x21 - Error retry req (ESCON) (2)
	
	0x22 - Selective reset with UC (ESCON)
	      Selective Reset with Unit Check.  Usually indicates a sequence
	      problem, wrong device address, invalid status or other channel
	      error.
	
	0x23 - Data Transfer Parity Error (B/T)
	
	0x24 - Command Parity Error (B/T)
	
	0x25 - Command Retry rejected error
	      Channel did not accept Command Retry.
	
	0x26 - Selective reset with overrun Error (ESCON)
	      Selective-Reset w/ Overrun.  Usually indicates a sequence
	      problem, wrong device address, invalid status or other channel
	      error.  Should not normally occur.
	
	0x27 - Data streaming error (B/T)
	
	0x28 - command table error (1)
	
	0x29 - retry count expired (ESCON)
	      Could indicate that a command was unable to complete due to a
	      link level failure and the link level retry count expired or
	      if status is attempted when the path to a control unit image is
	      no longer valid.  The Channel Interface will go offline when
	      this error occurs.
	
	0x30 - Bad status (1)
	
	0x31 - Unexpected CuFunc error (1)
	
	0x32 - PMF_VALID or PMF_ASTABED not set (ESCON)
	      The driver was told to go ready on a device that is on an image
	      that is not defined to the board.
	
	0x33 - DMA not done (2)
	
	0x34 - Wrong Read Start
	      VTAM issued a READ START command that was not expected.  If the
	      driver is configured to resend data, then it will.
	
	0x35 - Wrong Write Start (2)
	
	0x36 - Invalid Control Unit Image (ESCON)
	
	0x37 - Unable to get microcode traces
	
	0x38 - Read Start before the end of a read chain
	
	0x39 - not enough map registers (2)
	
	0x40 - not enough map registers (2)
	
	0x41 - could not allocate retransmit buffer
	
	0x42 - previous DMA not done (2)
	
	0x43 - DMA not done (2)
	
	0x44 - illegal command
	      The driver received a command from the mainframe that is not
	      defined for a 3174.
	
	0x45 - invalid LPDB (2)
	
	0x46 - spurious interrupt
	      The board interrupted the driver but when the driver tried
	      to determine the reason for the interrupt none was found.
	
	0x47 - link error (ESCON)
	      An error occurred during ESCON link level frame processing.
	
	0x48 - link level recoverable error (ESCON)
	      ESCON link level errors occurred but were recovered from.
	
	0x49 - CHEXEC cleared while waiting for FIFO OK (1)
	
	0x4A - spurious interrupt
	      The board interrupted the driver but when the driver tried
	      to determine the reason for the interrupt none was found.
	
	0x4B - unknown CUERR (1)
	
	0x4C - unexpected READ
	      The mainframe issued a READ even though we have no buffers
	      available.  The mainframe should not issue a READ until we
	      send a status indicating that we have buffers available.
	
	0x4D - unexpected WRITE START
	      VTAM issued a WRITE START command that was not expected.  This
	      could indicate that VTAM is resending data or that the
	      SNA Server has been stopped and started without the PU being
	      deactivated on the mainframe.  This is only a problem if it
	      occurs repeatedly while PUs are active.
	
	0x4E - wait for INEXEC to clear while getting MCode trace #1 (1)
	
	0x4F - wait for INEXEC to clear while getting MCode trace #2 (1)
	
	0x50 - wait for INEXEC to clear while getting MCode trace #3 (1)
	
	0x51 - invalid header while getting MCode trace (1)
	
	0x52 - wait for INEXEC to clear while getting MCode trace #4 (1)
	
	0x53 - wait for INEXEC to clear while getting MCode trace #5 (1)
	
	0x54 - illegal unaligned DMA (1)
	
	0x55 - unaligned read buffer passed down (mainframe write) (1)
	
	0x56 - unaligned write buffer passed down (mainframe read) (1)
	
	0xE0 - Tried to change global parameters while online (1)
	
	0xE1 - Online switch is offline
	
	0xE2 - Tried to go online when with no valid addresses specified (1)
	
	0xE3 - Invalid image address specified for online (1)
	
	0xE4 - No image address specified in the image table for online (1)
	
	0xE5 - Illegal path management function code (1)
	
	0xE6 - Microcode programming error (1)
	
	0xE7 - Channel is down
	
	0xE8 - Link level error detected
	
	0xE9 - Unable to add image
	
	0xEA - Cannot enable FPGA for download
	
	0xEB - FPGA configuration failed
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211 kbSNAServ400 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:2.11 (all versions),3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	
