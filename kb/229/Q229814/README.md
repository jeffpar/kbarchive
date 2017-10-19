---
layout: page
title: "Q229814: Configuring IIS to Handle Heavy Usage"
permalink: /kb/229/Q229814/
---

## Q229814: Configuring IIS to Handle Heavy Usage

	Article: Q229814
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer running Microsoft Internet Information Server (IIS) 4.0 may stop
	responding to client requests, even though the server appears to be stable and
	healthy. This situation usually arises from a heavy load; however, IIS does not
	consume large amounts of CPU or memory resources. This behavior may occur on a
	per-network interface card, IP address, or TCP port basis. A Network Monitor
	trace will indicate that the server is immediately resetting TCP connections,
	indicating that the physical, network, and transport layers are functioning at
	full capacity.
	
	CAUSE
	=====
	
	The problem occurs because of a lack of resources at the application layer to
	handle the requests.
	
	RESOLUTION
	==========
	
	Set the following metabase parameters:
	
	   - ServerListenBacklog
	
	- MaxEndPointConnections
	
	Increasing these values will result in an increase in handle count and memory
	usage. The values need to be tuned to achieve a balance between load handling
	capacity and memory usage.
	
	MORE INFORMATION
	================
	
	The ServerListenBacklog property specifies the number of outstanding sockets
	that can be queued. This value is based on the operating system parameter and
	the server size specified in the ServerSize property.
	
	  ServerListenBacklog
	  Range: 0 (unlimited)
	  Default: 40
	
	Use Adsutil.vbs to change the value.
	
	The Windows Script Host must be installed on the server to run this Visual Basic
	script:
	
	  cscript c:\winnt\system32\inetsrv\adminsamples\adsutil.vbs
	  SET w3svc/1/ServerListenBacklog 500
	
	The MaxEndpointConnections property specifies the maximum number of listen
	sockets that will be aggregated on a network endpoint. For example, if this
	value is set to 15, a maximum of 15 total connections can be made to a single
	port, even if more than one domain is bound to the port.
	
	  MaxEndPointConnections
	  Range: 0 (unlimited)
	  Default: -1 (unlimited)
	
	Use Adsutil.vbs to change the value.
	
	REFERENCES
	==========
	
	Online Product Documentation
	
	Additional query words: Overload time_wait IIS TCP RESETS
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
