---
layout: page
title: "Q169890: Enable PPTP Filtering Option No Longer Works"
permalink: /kb/169/Q169890/
---

## Q169890: Enable PPTP Filtering Option No Longer Works

{% raw %}

	Article: Q169890
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The PPTP filtering option in the Advanced IP Addressing dialog box has no effect
	after Routing and Remote Access Service (RRAS) is installed.
	
	CAUSE
	=====
	
	The updated RRAS service disables the functionality of this option by design.
	RRAS includes new, enhanced filtering capabilities. After RRAS is installed, the
	check box has no functionality; therefore, PPTP filters must be configured
	manually.
	
	RESOLUTION
	==========
	
	PPTP filtering consists of two filters. Both filters must be configured for
	input and output on the interface that is the endpoint of the PPTP connection.
	The four filters work together to complete a PPTP filter. The PPTP filter will
	not be secure unless all four filters are set correctly. If you enabled the PPTP
	Filtering option before you installed RRAS, those filters are migrated to the
	new filtering facility and these filters should already appear in the filter
	lists for that interface.
	
	PPTP uses TCP port 1723 for the control channel and IP Protocol ID 47 for the
	data channel.
	
	WARNING: The PPTP filters published in the Routing and Remote Access Service
	"Administrator's Guide" on pages 39-42 are incorrect. Please use the following,
	more secure, filter definitions.
	
	To add PPTP filters:
	
	1. Click the Start button, point to Programs, point to Administrative Tools, and
	  then click Routing and RAS Admin.
	
	2. Double-click IP Routing, and then double-click Summary.
	
	3. Right-click the interface on which you want to enable the filter, this should
	  be the external (Internet connected) interface, and then click Configure
	  interface.
	
	4. Click Input Filters in the Packet filters section of the IP Configuration
	  dialog box.
	
	5. Create the Input Filters.
	
	  a. First Input Filter: Allow packets using the GRE Protocol. This filter
	     allows your router to send or receive any PPTP packets.
	
	     1. Click Add in the IP Packet Filters Configuration dialog box and select
	        Other in the Protocol drop-down list.
	
	     2. Type 47 in the Protocol text field.
	
	     3. Click OK.
	
	  b. Second Input Filter: Allow packets coming to the PPTP Control Port. This
	     filter allows your router to receive any PPTP Control messages.
	
	     1. Click Add in the IP Packet Filters Configuration dialog box.
	
	     2. Click Destination Network to check it.
	
	     3. Type the IP address of your external adapter in the IP Address field
	        and type 255.255.255.255 in the Subnet mask field.
	
	     4. Select TCP in the Protocol drop-down list, type 0 (implying any)in the
	        Source port field, and type 1723 in the Destination port field.
	
	     5. Click OK.
	
	     6. Click Drop all except listed below in the Filter Action section of the
	        IP Packet Filters Configuration dialog box and click OK.
	
	6. Click Output Filters in the IP Configuration dialog box to create a set of
	  two output filters.
	
	  a. First Output Filter: Allow packets using the GRE Protocol. This filter
	     allows your router to send or receive any PPTP packets.
	
	     1. Click Add in the IP Packet Filters Configuration dialog box and select
	        Other in the Protocol drop-down list.
	
	     2. Type 47 in the Protocol text field.
	
	     3. Click OK.
	
	  b. Second Output Filter: Allows your router to send any PPTP Control
	     messages.
	
	     1. Click Add in the IP Packet Filters Configuration dialog box.
	
	     2. Click Source Network to check it.
	
	     3. Type the IP address of your external adapter in the IP Address field
	        and type 255.255.255.255 in the Subnet mask field.
	
	     4. Select TCP in the Protocol drop-down list, type 1723 in the Source port
	        field, and type 0 (implying any) in the Destination port field.
	
	     5. Click OK.
	
	     6. Click Drop all except listed below in the Filter Action section of the
	        IP Packet Filters Configuration dialog box.
	
	7. Click OK in the IP Packet Filters Configuration dialog box to return to the
	  Routing and RAS Admin.
	
	In order for RRAS to function as the initiator of a Dial-on Demand PPTP
	connection, you must add a third input filter and a third output filter.
	
	Third Input Filter
	------------------
	
	To add the third input filter:
	
	1. Click Add in the IP Packet Filters Configuration dialog box.
	
	2. Select the Destination Network check box.
	
	3. Type the IP address of your external adapter in the IP Address field and type
	  255.255.255.255 in the Subnet mask field.
	
	4. Select TCP in the Protocol drop-down list, type 1723 in the Source port
	  field, and type 0 (implying any) in the Destination port field.
	
	5. Click OK.
	
	Third Output Filter
	-------------------
	
	1. Click Add in the IP Packet Filters Configuration dialog box.
	
	2. Click Source Network to check it.
	
	3. Type the IP address of your external adapter in the IP Address field and type
	  255.255.255.255 in the Subnet mask field.
	
	4. Select TCP in the Protocol drop-down list, type 0 (implying any) in the
	  Source port field, and type 1723 in the Destination port field.
	
	5. Click OK.
	
	
	MORE INFORMATION
	================
	
	The PPTP filters can be combined with Local Host filters to allow other
	server-based applications such as Microsoft Proxy Server Domain Name Service
	(DNS) to securely co-exist with Routing and Remote Access Services. For more
	information, please see the following article in the Microsoft Knowledge Base:
	
	  Q169548 Using MS Proxy with Routing and Remote Access
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : 4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
