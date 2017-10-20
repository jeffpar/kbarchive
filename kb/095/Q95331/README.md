---
layout: page
title: "Q95331: Novell Connectivity Limited to One Network Adapter"
permalink: /kb/095/Q95331/
---

## Q95331: Novell Connectivity Limited to One Network Adapter

{% raw %}

	Article: Q95331
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows for Workgroups provides support for Novell connectivity on
	Ethernet and token-ring network adapters. However, the Microsoft implementation
	of the IPX protocol (MSIPX) only lets you install Novell connectivity on one
	network adapter.
	
	MORE INFORMATION
	================
	
	If you choose Novell NetWare as an additional network, Windows for Workgroups
	adds the MSIPX drivers to your configuration. These drivers are installed to the
	first network adapter in the list displayed in the Network Adapters dialog box
	of the Control Panel (accessed by choosing the Network icon and then choosing
	the Adapters button).
	
	If your machine has more than one network adapter, the first adapter chosen
	during the setup process is the adapter on which NetWare connectivity will be
	supported.
	
	
	If you want to support IPX on a different network adapter, the adapters must be
	removed and reinstalled so that the desired adapter is first on the list. To
	accomplish this, use the following steps:
	
	1. Start Windows for Workgroups.
	
	2. In the Main group, start Control Panel.
	
	3. In the Control Panel window, choose the Network icon.
	
	4. Choose the Networks button.
	
	5. Under Other Networks in Use, select Novell NetWare.
	
	6. Choose the Remove button.
	
	7. Choose the OK button to close the Compatible Networks dialog box.
	
	8. Choose the Adapters button.
	
	9. Select a network adapter.
	
	10. Press the Remove button.
	
	11. Repeat steps 9 and 10 until you have removed all adapters.
	
	12. Choose the Close button.
	
	13. The following warning message is displayed:
	
	  Windows for Workgroups will not provide workgroup features without a network
	  adapter installed. Are you sure you want to continue without a network
	  adapter installed?
	
	  Choose the Yes button.
	
	14. Choose the Adapters button to reenter the Network Adapters dialog box.
	
	15. Choose the Add button.
	
	16. Find the adapter that you want to use to connect to Novell NetWare
	  resources, select it, and then press the OK button.
	
	17. Add any adapters that were previously installed on the machine.
	
	18. When you have added all the adapters you want to use, choose the OK button
	  to close Adapters dialog box.
	
	19. Choose the Networks button.
	
	20. Under Available Netware Types, select Novell NetWare, and then press the Add
	  button.
	
	21. Choose the OK button to close the Network Settings dialog box.
	
	22. Choose the OK button again.
	
	Windows for Workgroups now warns you that you must reboot for the changes to take
	effect. To do so, choose the Restart button.
	
	Novell NetWare is manufactured by a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	KBCategory: kbnetwork kb3rdparty
	KBSubcategory: wfw wfwg
	
	Additional query words: 3.10 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
