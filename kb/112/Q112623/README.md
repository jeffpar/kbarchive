---
layout: page
title: "Q112623: Intel EtherExpress 16 MCA Adapter Requires Updated Files"
permalink: kb/112/Q112623/
---

## Q112623: Intel EtherExpress 16 MCA Adapter Requires Updated Files

	Article: Q112623
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	3.11
	WINDOWS |
	kbnetwork kb3rdparty
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using the Intel EtherExpress 16 MCA network interface card (NIC) with
	an NDIS 3.0 driver, you may be unable to see or connect to other machines on the
	network. Switching to the real mode (NDIS 2.0) driver allows you to see and
	connect to other workstations normally.
	
	RESOLUTION
	==========
	
	Intel has an updated .ADF file that allows the Intel EtherExpress 16 MCA NIC to
	work with the NDIS 3.0 driver.
	
	E16ADF.EXE can be downloaded from Intel's bulletin board service. This is a
	self-extracting executable file that contains the following two files:
	
	  @628B.ADF     8561     9/1/93
	  README.TXT
	
	The old .ADF file has the file date 7/28/92.
	
	
	Please contact your hardware manufacturer for any assistance or information
	concerning reconfiguring your MicroChannel computer with the updated .ADF file.
	
	The products included here are manufactured by Intel, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	
	Additional query words: 3.11 error cannot connect disconnect hang microchannel architecture ex16adf.exe e16adf 5038 2/23/94
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
