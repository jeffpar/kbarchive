---
layout: page
title: "Q151629: INFO: TN3270 LU Assignment and the Use of Submasks"
permalink: kb/151/Q151629/
---

## Q151629: INFO: TN3270 LU Assignment and the Use of Submasks

	Article: Q151629
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0, 4.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When an IP subnet mask is defined in TN3270 Admin for an LU resource, the SNA
	Server 2.11 Service Pack 1 TN3270E Server checks the range of addresses used by
	the subnet mask to determine if a TN3270 user has access to the LU.
	
	For example,
	
	1. Add four LUA LUs to the TN3270E configuration.
	
	2. Use any text editor to modify the Tn3270E configuration file
	  (<tnroot>\Tnsvrcfg.tnc).
	
	3. Define Three of the LUs with a class B ip address of 130.9.x.x and subnet
	  mask of 255.255.0.0.
	
	4. Define one LU with an address of 130.8.8.1 and subnet mask of 255.255.0.0.
	
	LUs added to the config:
	
	  LU3 assigned to 130.9.5.1
	  LU2 assigned to 130.9.5.2
	  LU4 assigned to 130.9.8.1
	  LU5 assigned to 130.8.8.1
	
	Sample TN3270 configuration file:
	
	     [Group 1]
	     Name=LU3
	     Comment=
	     SNAResource1=LU3
	     IPConnection1=130.009.005.001,255.255.000.000,00000,65535
	
	A user with an IP address of 130.9.5.1 will be able to get any LU, except the one
	configured for 130.8.8.1, even though the users IP address is explicitly
	configured for one LU.
	
	MORE INFORMATION
	================
	
	When a client tries to connect to the server, the IP address of the client is
	masked (bitwise AND) by the subnet mask of each resource. The result from this
	mask is compared to the result from masking the subnet mask of the resource by
	the IP address configured for the resource.
	
	The default subnet mask is 255.255.255.255. When this is used as a mask value it
	has no effect; therefore, in this case, when a client connects the IP address of
	the client is compared to the IP address configured for the resource.
	
	In the example, the subnet mask is 255.255.0.0. When this is used as a mask, it
	makes the final two octets in the masked result zero. Therefore, in this case, a
	client that has the address 130.9.5.1 will be able to connect to any resource
	that has the configured IP address of 130.9.xxx.xxx, if that resource's mask is
	255.255.0.0.
	
	Additional query words: 2.11 prodsna snafaqtop
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.11,3.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
