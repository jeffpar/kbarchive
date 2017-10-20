---
layout: page
title: "Q183794: Smart IPX Device Driver Interface to Srv.sys"
permalink: /kb/183/Q183794/
---

## Q183794: Smart IPX Device Driver Interface to Srv.sys

{% raw %}

	Article: Q183794
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This document defines the Smart IPX interface. This interface is provided by the
	Windows NT CIFS/SMB file server driver (Srv.sys) to facilitate the offload of
	bulk transmit requests to IPX-based intelligent LAN subsystems.
	
	WARNING: This interface exists in Windows NT version 4.0; however, the interface
	is not guaranteed to exist in versions of Windows NT beyond 5.0.
	
	The interface allows independent software vendors (ISVs) or independent hardware
	vendors (IHVs) to provide drivers that provides a bulk transmit capability to
	Srv.sys. These ISV-provided drivers will be called SmartIO drivers, or simply
	SmartIO. This Smart IPX interface is available as a Windows NT kernel-mode
	driver interface, and is not available to user-mode applications.
	
	NOTE: Although the term "Smart Card" is used in this interface, it should not be
	confused with the normal use of "Smart Cards"; "Smart Card" in this context is
	used to refer to IPX-based cards with the ability to deal with large amounts of
	I/O.
	
	Traditionally, Srv.sys initiates data transmissions to requesting clients by
	breaking bulk data down into network-sized packets and individually submitting
	those packets to the lower networking layers (TDI/NDIS) for transmission. This
	process can be very CPU-intense and may consume a large portion of a server's
	CPU cycles. Bulk transmit requests, however, enable Srv.sys to efficiently pass
	large blocks of raw data to intelligent LAN subsystems for network packetization
	and transmission. The purpose of bulk transmit requests is to offload the
	CPU-intense network processing that normally occurs in Srv.sys, NwLinkIpx, NDIS
	wrapper, and NDIS drivers.
	
	The Smart IPX Device Driver Interface (DDI) enables SmartIO drivers to interface
	directly with Srv.sys. SmartIO drivers must, in turn, interface with intelligent
	LAN subsystems to submit bulk transmit operations. This lower level interface is
	deemed to be ISV-specific and is not included in the scope of this
	specification.
	
	The Smart IPX interface is a call/callback between Srv.sys and a SmartIO driver.
	The following calls are currently defined: Open, Read, ReadComplete, Close, and
	Deregister.
	
	The call/callback addresses are initially exchanged as a result of an internal
	device IOCTL sent by the SmartIO driver to Srv.sys. Direct calls are made
	between the two drivers after this initial IOCTL.
	
	MORE INFORMATION
	================
	
	The following sections define the Smart IPX call/callback interface. It is
	assumed that the reader has the Windows NT Device Driver Kit (DDK) and
	understands how to write kernel-mode drivers.
	
	Registration IOCTL
	------------------
	
	SmartIO registers and exchanges call/callback addresses with Srv.sys during it's
	initialization. This registration is accomplished by sending an IOCTL to Srv.Sys
	of the following type:
	
	     #define FSCTL_SRV_IPX_SMART_CARD_START \ 
	         _SRV_CONTROL_CODE (21, METHOD_NEITHER)
	
	Prior to sending the internal request, update the SystemBuffer field of the
	internal request packet (IRP) to point to the following data structure, which is
	provided by the SmartIO driver.
	
	     typedef struct {
	         BOOLEAN (*Open)(
	             IN PVOID SmbHeader
	             IN PFILE_OBJECT FileObject,
	             IN PUNICODE_STRING FileName,
	             IN PTDI_ADDRESS_IPX IpxAddress,
	             IN ULONG Flags,
	             OUT PVOID *SmartCardContext);
	         VOID (*Close)(
	             PVOID SmartCardContext);
	         BOOLEAN (*Read) (
	             IN PVOID SmbHeader,
	             IN PVOID SmartCardContext,
	             IN LONG Key,
	             IN VOID SrvContext);
	         VOID (*ReadComplete)(
	             IN PVOID SrvContext,
	             IN PFILE_OBJECT FileObject,
	             IN PMDL Mdl,
	             IN ULONG Length);
	         VOID (*DeRegister)(
	             VOID);
	     } SRV_IPX_SMART_CARD, *PSRV_IPX_SMART_CARD;
	
	The server fills in the ReadComplete field with its own routine address, which is
	used in the ReadComplete callback (see the ReadComplete section below).
	
	Open
	----
	
	     BOOLEAN Open(
	         IN PVOID SmbHeader
	         IN PFILE_OBJECT FileObject,
	         IN PUNICODE_STRING FileName,
	         IN PTDI_ADDRESS_IPX IpxAddress,
	         IN ULONG Flags,
	         OUT PVOID *SmartCardContext);
	
	This is a call from Srv.Sys to SmartIO. It will occur for an OpenFile SMB from
	the client -- after Srv.Sys has validated the SMB and performed the file open,
	but before the SMB response is sent back to the client. Its parameters are:
	
	  SmbHeader -- Pointer to the SMB header for this request.
	
	  FileObject -- File object pointer for the file just opened on behalf of
	  the client.
	
	  FileName -- Name of the file just opened; this is for future use in case
	  we want do special processing based on the file extension.
	
	  IpxAddress -- Pointer to a structure defining the network address.
	
	  Flags -- Various file related flags; THUN_CACHE_SUPPORTED is the only
	  flag currently defined.
	
	  SmartCardContext -- Pointer to a location where SmartIO will place its
	  ID for this file. If a zero is returned, SmartIO should not be called
	  for reads of this file.
	
	SmartIO returns TRUE if reads of this file can be accelerated; otherwise, it
	returns FALSE.
	
	Return Values:
	
	  TRUE -- SmartIO should be called for reads of this file.
	
	  FALSE -- SmartIO should not be called for reads of this file.
	
	Read
	----
	
	     BOOLEAN Read(
	         IN PVOID SmbHeader,
	         IN PVOID SmartCardContext,
	         IN LONG Key,
	         IN VOID SrvContext);
	
	This is a call from Srv.sys to SmartIO. It will occur for Read and Read
	Multiplexed SMBs from the client, after the Server has validated the SMB. Its
	parameters are:
	
	  SmbHeader -- Pointer to the SMB header for this request.
	
	  SmartCardContext -- Value returned on Open.
	
	  Key -- Parameter required to read the file.
	
	  SrvContext -- Value that will be returned by SmartIO on a ReadComplete call.
	
	SmartIO will send the read responses to the client as required and when complete
	will call the server's ReadComplete function. This routine must be called at
	PASSIVE level.
	
	If SmartIO can handle the read request, it will return TRUE; otherwise, it will
	return FALSE.
	
	Return Values:
	
	  TRUE -- SmartIO will perform the read of this file.
	
	  FALSE -- SmartIO cannot perform the read of this file.
	
	ReadComplete
	------------
	
	     VOID ReadComplete(
	         IN PVOID SrvContext,
	         IN PFILE_OBJECT FileObject,
	         IN PMDL Mdl,
	         IN ULONG Length);
	
	This is a call from SmartIO to Srv.sys. It occurs in response to a Read call. Its
	parameters are:
	
	  SrvContext -- Value that was passed in on the Read call.
	
	  FileObject -- File object from Open call.
	
	  Mdl -- Mdl chain for just completed read operation.
	
	  Length -- Length of data for just-completed read operation.
	
	Srv.sys will mark this read as complete and do any required cleanup processing.
	This routine can be called at DISPATCH level.
	
	Return Values:
	
	  None
	
	Close
	-----
	
	     VOID Close(
	         PVOID SmartCardContext);
	
	This is a call from Srv.sys to SmartIO. It will occur for a CloseFile SMB from
	the client, after the server has validated the SMB. It has one parameter:
	
	  SmartCardContext -- Value returned on Open call.
	
	SmartIO will free any resources it allocated as a result of the Open call and
	will return.
	
	Return Values:
	
	  None
	
	Deregister
	----------
	
	     VOID Deregister(
	         VOID);
	
	This is a call from Srv.sys to SmartIO. It will occur if Srv.sys is being
	unloaded.
	
	Return Values:
	
	  None
	
	Additional query words: Srv SmartIO IPX FSCTL_SRV_IPX_SMART_CARD_START
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
