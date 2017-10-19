---
layout: page
title: "Q101417: Accessing the Modem Status Register (MSR) in Windows"
permalink: /kb/101/Q101417/
---

## Q101417: Accessing the Modem Status Register (MSR) in Windows

	Article: Q101417
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In the Microsoft Windows graphical environment, versions 3.0 and 3.1 of the
	communications driver (COMM.DRV) do not provide the absolute states of the
	following control lines:
	
	  CTS     Clear To Send
	  DSR     Data Set Ready
	  RI      Ring Indicator
	  RLSD    Receive Line Signal Detect; Carrier Detect (CD)
	
	The RLSD signal is probably the most important (for modem software), and is often
	necessary. This article provides a method to obtain this information. Although
	this method is undocumented, it will be supported in future versions of 16-bit
	Windows.
	
	MORE INFORMATION
	================
	
	The Windows Software Development Kit (SDK) documentation indicates that
	SetCommEventMask() can be used to determine the absolute state of these signals,
	using the EV_CTSS, EV_DSRS, EV_RING, and EV_RLSDS events. However, in all cases,
	the EV_* bits are OR'd into the EvtWord without clearing the previous value of
	the EvtWord. If a modem status register (MSR) bit has become set, it will not be
	cleared until GetCommEventMask() is called. Therefore, if a bit is set, but then
	changes state, the EvtWord will still indicate that it is set until
	GetcommEventMask() is called. (Note, however, that EV_RLSDS will never be set.
	This is a bug in the Windows versions 3.0 and 3.1 COMM.DRV.)
	
	One way to obtain the state information is to read the Modem Status Register
	directly from the Universal Asynchronous Receiver Transmitter (UART). However,
	this method clears the delta bits of the MSR making them unavailable to
	COMM.DRV. Therefore, DO NOT DO THIS!
	
	This information can also be obtained from COMM.DRV. COMM.DRV maintains an
	extended data control Block (DCB) called the DEB. Within this structure is a
	field called the MSRShadow. This is a shadow (copy) of the MSR on the UART.
	
	The following code will provide direct access to the MSRShadow byte. DO NOT
	MODIFY THIS LOCATION!
	
	     #define COMM_MSRSHADOW 35
	     #define MSR_CTS              0x10  /* Absolute CTS state in MSR  */ 
	     #define MSR_DSR              0x20  /* Absolute DSR state in MSR  */ 
	     #define MSR_RI               0x40  /* Absolute RI state in MSR   */ 
	     #define MSR_RLSD             0x80  /* Absolute RLSD state in MSR */ 
	
	     LPBYTE GetCommMSRShadow(short nCid)
	     {
	        /* Return far pointer to MSR shadow byte */ 
	
	        return (((LPBYTE)SetCommEventMask(nCid, 0)) + COMM_MSRSHADOW);
	
	     } /* GetCommMSRShadow */ 
	
	Once this pointer is available, it can be used as follows:
	
	        lpMSRShadow = GetCommMSRShadow(nCid);
	        bRLSD = (*lpMSRShadow) & MSR_RLSD;
	
	        if (bRLSD)
	            /** RLSD is high **/ 
	        else
	            /** RLSD is low **/ 
	
	Althought this method is supported in a Win32-based application, you should use
	GetCommModemStatus() instead.
	
	Additional query words: no32bit 3.00 3.10 DDKCOMM
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
