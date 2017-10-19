---
layout: page
title: "Q162513: Non-Activation XID Produces Event ID 23"
permalink: /kb/162/Q162513/
---

## Q162513: Non-Activation XID Produces Event ID 23

	Article: Q162513
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server connection will go pending and the following event will be logged
	to the application event log:
	
	  Event ID: 23
	
	  Connection <value> using Link Service <value> failed.
	
	  Qualifier: AF
	
	CAUSE
	=====
	
	The DLC Link service incorrectly identifies non-activation XID 3s as normal
	XIDs, and generates an outage on the connection.
	
	RESOLUTION
	==========
	
	Apply the fix referenced below. This fix corrects the DLC link service and
	causes non-activation XIDs to be passed up to the SNA Server service intact.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 2.11, 2.11 Service
	Pack 1 (SP1).
	
	
	A supported fix is now available for 2.11 SP1, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	
	MORE INFORMATION
	================
	
	The following is a sample Level2 trace showing the link service reading the
	non-activation XID. Byte 8-9 of the format 3 XID is 0x10 and 0x8E respectively.
	Bit 12-13 of this byte sequence is '11,' which is nonactivation exchange:
	
	TR     ---------------------------------------------- 10:06:55.33
	TR     READ               OK
	TR     ---- DLC API control block at address 73000----
	TR     00310000 00000000 00000000 1C300700     <.1...........0..>
	TR     68000000 00000000 0000AF00              <h...........    >
	TR
	TR     00000000 80006F00 40000000 00042008     <......o.@..... .>
	TR     3F00CC00 00000000 0E031840 0001FA16     <?..........@....>
	TR     C4454000 30001010 00000000 00000000     <DE@.0...........>
	TR     00000000 00000000 00000404 BFAE0000     <................>
	TR     346FFFFF FFFC0000 108E4000 00000000     <4o........@.....>
	TR     00010B50 00413800 00000004 000E0FF4     <...P.A8........4>
	TR     C3C8C2C3 E5C4F0F0 4BD4F1F2 F1F20E06     <CHBCVD00KM1212..>
	TR     F1D5C3D7 F5F21037 00161101 130011F3     <1NCP52.7.......3>
	TR     F7F4F5F1 F7F0F5F7 F0F0F7F2 F4F6F620     <745170570072466 >
	TR     11040E02 F5F6F8F8 F2F3F1F0 F0F3F0F2     <....568823100302>
	TR     0804F0F6 F0F3F040 07099601 620814       <..06030@..o.b.. >
	</CODE>
	
	When the link service processes the above XID, it inappropriately deems it
	an error condition and reports it to the SNA Server service in the
	following message:
	<CODE><![CDATA[
	DLC    ---------------------------------------------- 10:06:55.42
	DLC    01160000->03020100 DLCST OUTG
	DLC                       Outage: 0xAF UPTYPE:0 UPCNTR:0 COUNT:0
	DLC
	DLC    ---- Header  at address 00D14828, 0 elements ----
	DLC    18AF0000 00000000 00008800 01003000     <..........h...0.>
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ211 kbSNAServ211SP1
	Version           : WINDOWS:2.11,2.11 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
