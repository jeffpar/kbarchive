---
layout: page
title: "Q197991: How to Configure WLBS Using Multiple Network Interface Cards"
permalink: kb/197/Q197991/
---

## Q197991: How to Configure WLBS Using Multiple Network Interface Cards

	Article: Q197991
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Load Balancing Service 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The purpose of this article is to describe how to configure Windows NT Load
	Balancing Service (WLBS) when using multiple network interface cards (NICs).
	
	MORE INFORMATION
	================
	
	The use of a second NIC may improve performance by handling traffic
	simultaneously with the original NIC. Multicast support is enabled by default.
	However, if you disable multicast support, the use of multiple network interface
	cards (with one NIC dedicated to handling cluster traffic) is greatly preferred
	to achieve optimum performance and the full range of networking functionality.
	
	To set the WLBS bindings for use with multiple network interface cards:
	
	1. In Control Panel, double-click Network and then click the Bindings tab.
	
	2. In the Show Binding For drop down list, select All Protocols.
	
	  The bindings for all installed networking protocols can be displayed and
	  modified in this dialog box. Note that WLBS Driver appears in the list of
	  protocols. For each protocol, you can see the network interface cards, also
	  known as adapters, to which each protocol is bound.
	
	3. Click the plus sign (+) to the left of each protocol to see the adapters to
	  which it is bound. When the bindings are displayed, you will see a minus sign
	  (-) to the left of the protocol.
	
	  You will notice that WLBS Virtual NIC appears in the list of adapters for the
	  TCP/IP and WINS Client protocols. WLBS registers itself with Windows NT as
	  both a protocol and as a virtual network adapter. In addition, you should see
	  at least two other adapters corresponding to actual NICs installed in your
	  system.
	
	To set the proper bindings:
	
	1. Enable the binding from the WLBS Driver to the WLBS Virtual NIC adapter. To
	  enable a binding, select the adapter and click Enable.
	
	2. Enable the binding from the WLBS Driver to the network adapter that will
	  handle cluster traffic (called the cluster adapter).
	
	3. Disable the binding from the WLBS Driver to all other adapters. To disable a
	  binding, select the adapter and click Disable.
	
	4. Enable the binding from the TCP/IP Protocol to the WLBS Virtual NIC adapter.
	
	5. Enable the binding from the TCP/IP Protocol to the network adapter or
	  adapters (called the dedicated adapter) that will handle network traffic
	  other than the cluster traffic.
	
	6. Disable the binding from the TCP/IP Protocol to the cluster adapter.
	
	7. Move the WLBS Virtual NIC adapter down so that it is below the dedicated
	  adapter in the TCP/IP list of adapters. To move the adapter, select it and
	  click Move Down. If the WLBS Virtual NIC adapter is already below the
	  dedicated adapter, no action needs to be taken.
	
	8. Enable the binding from the WINS Client to the WLBS Virtual NIC adapter.
	
	9. Enable the binding from the WINS Client to the dedicated adapter or adapters.
	
	10. Disable the binding from the WINS Client to the cluster adapter.
	
	11. Move the WLBS Virtual NIC adapter down so that it is below the dedicated
	  adapter in the WINS Client list of adapters. If the WLBS Virtual NIC adapter
	  is already below the dedicated adapter, no action needs to be taken.
	
	12. Disable the bindings from all other protocols (such as NetBEUI and DLC) to
	  the cluster adapter.
	
	13. Click Close to initiate the rebinding of network components by Windows NT.
	
	During this process, the new binding configuration will be stored in the Windows
	NT registry, and selected software components will review it. WLBS will check
	the interconnection for validity and may warn you if it discovers a problem.
	
	It is highly recommended that you correct any binding problems right away before
	restarting your computer, or your network may not be accessible when
	restarting.
	
	During the binding review, the TCP/IP protocol will discover that it is bound to
	a new network adapter, the WLBS Virtual NIC, and it will display the Microsoft
	TCP/IP Properties dialog box. This dialog box is displayed the first time you
	establish the binding so that TCP/IP can set up IP addresses for the adapter.
	You also can call the dialog box later to make changes by selecting TCP/IP in
	the list of protocols on the Protocols tab in the Network utility and then
	clicking Properties.
	
	To set up TCP/IP for WLBS:
	
	1. Select WLBS Virtual NIC from the list of adapters in the drop down list.
	
	2. Enter the cluster IP address in the space for the IP address. This address
	  corresponds to the primary cluster IP address that you entered in the WLBS
	  Setup dialog box.
	
	3. Enter the subnet mask and leave the default gateway blank. The default
	  gateway should only be assigned to the dedicated adapter so that it handles
	  the responses to requests accepted by the virtual adapter.
	
	4. If you need to configure additional IP addresses for your cluster (for
	  example, if you are running a multihomed Web server), click Advanced to call
	  the dialog box that lets you add more IP addresses.
	
	5. Select the WINS Address tab and fill out the information so that it resembles
	  the setup for the dedicated adapter.
	
	6. Click OK.
	
	This completes the steps required to bind WLBS with your other networking
	components and to set up the necessary TCP/IP parameters when using multiple
	network interface cards.
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q193602 Configuration Options for WLBS Hosts Connected to a Layer 2 Switches
	
	Additional query words: Convoy
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch kbWinNTS400 kbWinNTLBSSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
