---
layout: page
title: "Q255981: Processing the Key Certificate Request for the Server Fails"
permalink: /kb/255/Q255981/
---

## Q255981: Processing the Key Certificate Request for the Server Fails

{% raw %}

	Article: Q255981
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to process a Key Certificate Request for a server, you may
	receive the following error message:
	
	  Error!!! Certificate Server is unable to process your request. Last status
	  error code = 57.
	
	If you are following the steps described in the "Processing the Key Certificate
	Request for the Server" section in Q218445, How to Configure Certificate Server
	for Use with SSL on IIS, this error message occurs when you click Submit Request
	on the Web Server Enrollment page.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q218445 How to Configure Certificate Server for Use with SSL on IIS
	
	CAUSE
	=====
	
	This error message indicates that "Invalid Data" was submitted to Certificate
	Server. This can occur for one of the following reasons:
	
	- You are submitting a request that is not formatted correctly
	
	-OR-
	
	- The Certificate Authority used a network share or relative path to point to
	  the Shared Directory when configuring Certificate Server. Please contact your
	  Certificate Authority for assistance.
	
	RESOLUTION
	==========
	
	To resolve this issue, do the following:
	
	1. From the Windows NT Option Pack, click Microsoft Certificate Server, and then
	  choose Process Certificate Request File.
	
	2. When you are prompted to open a Request File, choose the file, which is
	  NewKeyRq.txt (by default) and stored in the root.
	
	3. When you are prompted to save this file as an Outfile Name, choose an
	  appropriate file name with the extension .crt.
	
	You can now proceed to the steps described in the "Installing the Key Certificate
	on the Server" section in the following Knowledge Base article:
	
	  Q218445 How to Configure Certificate Server for Use with SSL on IIS
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
