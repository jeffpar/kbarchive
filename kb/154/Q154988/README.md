---
layout: page
title: "Q154988: Troubleshooting Fast EtherLink and EtherLink III (R) Adapters"
permalink: kb/154/Q154988/
---

## Q154988: Troubleshooting Fast EtherLink and EtherLink III (R) Adapters

	Article: Q154988
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are have problems installing 3com Etherdisk drivers for Etherlink and
	the Etherlink III (R) Bus Master Adapters, the troubleshooting guide below will
	help you with a smooth installation.
	
	If the adapter diagnostic tests fail, the adapter might not be defective. Check
	the following:
	
	- Make sure the adapter is completely seated in its slot. Review the
	  installation instructions in the appropriate adapter guide.
	
	- If you are running the Group 2 test, make sure the adapter is securely
	  connected to a loopback plug or to a properly cabled network.
	
	- If you are running the Group 3 test, make sure the adapter is securely
	  connected to a properly cabled network and an echo server is set up on the
	  network.
	
	- Make sure the configuration setting for the transceiver type is correct.
	
	- Running Group 2 tests while connected to an active network can cause
	  intermittent failures. These failures can be avoided by using a loopback plug
	  or by connecting to an inactive network on which only the computer being
	  tested is operating.
	
	- If you installed a twisted-pair adapter, check the LED on the back plate of
	  the adapter. The LED should be checked only during or after the diagnostic
	  tests have been run. The LED will be on when there is a correct connection
	  between the adapter and the hub. The LED will flash if the polarity of the
	  connection is swapped.
	
	- Install the adapter in another slot and run the tests again. The slot in the
	  computer may be defective.
	
	- Install the adapter in a known, functioning computer and run the tests again.
	  The computer in which the adapter is installed might be defective.
	
	- Try a different loopback plug. The loopback plug you are using might be
	  defective.
	
	- Replace the failed adapter with a known working adapter with the same
	  configuration. If the second adapter fails, something is probably wrong with
	  the test environment, not with the adapter.
	
	MORE INFORMATION
	================
	
	For more information, please contact 3com Corporation.
	
	Additional query words: 3com Nic netcard drivers installation setup diagnostic bus master adapter
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
