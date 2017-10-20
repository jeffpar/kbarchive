---
layout: page
title: "Q123203: X.121 Specification for X.25 Address Structure"
permalink: /kb/123/Q123203/
---

## Q123203: X.121 Specification for X.25 Address Structure

{% raw %}

	Article: Q123203
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50
	
	WINDOWS
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Within the X.25 network protocol specification, the X.121 specification defines
	the format of the X.25 address. The structure of X.25 addresses resembles phone
	numbers.
	
	MORE INFORMATION
	================
	
	The following text explains the structure of the X.25 address.
	
	Data Network Identification Code (DNIC)
	---------------------------------------
	
	The DNIC makes up the first four digits in an X.121 or X.25 address.
	
	Country Code
	------------
	
	The first three digits in the DNIC are the country code. For example, the country
	code for Canada is 302, so every X.25 network address in Canada begins with 302.
	The U.S. has several country codes. U.S. DNICs can start with 310, 311, 312, or
	313.
	
	Network ID
	----------
	
	The fourth digit is the Network ID, identifying which network it is. For example,
	DataPac of Canada has a network ID of 0, so the DNIC for DataPac is 3020.
	Infoswitch of Canada has a network ID of 9, so Infoswitch has a DNIC of 3029. In
	the U.S. MCI has a DNIC of 3106, Sprinet has a DNIC of 3110, and Infonet has a
	DNIC of 3137.
	
	The National Number
	-------------------
	
	The National Number is the 5th through 12th digits of the X.25 address. This
	number is used to identify a unique DCE node (X.25 node) within a network.
	Network vendors lease DCE or X.25 nodes. Each of these nodes must have a unique
	X.121 address. Within a given vendor's X.25 network, the first four digits of
	the DCE addresses will all be the same--they will be the DNIC for the vendor.
	Digits 5 through 12 (the National Number) are assigned by the network vendor to
	create a unique X.25 address for each X.25 node, or Circuit Terminating
	Equipment (DCE).
	
	Subaddress
	----------
	
	Most networks support a two-digit subaddress, which can be added to the end of
	the National Number. The two digits are not used by the network, but are passed
	through for use by the user's Data Terminating Equipment (DTE). The DTE is
	primarily the X.25 card (Eicon or Atlantis) that the X.25 application uses to
	communicate with the network DCE node, where each physical port on an X.25 card
	is connected to a DCE node.
	
	The two subaddress digits are usually used when X.25 applications are located on
	LAN workstations. Eicon and Atlantis cards require a two-digit subaddress when
	they will be managing X.25 sessions (or virtual circuits) for X.25 applications
	(such as an MTA or X.400 Gateway) when the application is running on a LAN
	workstation that does not contain the Eicon or Atlantis card.
	
	Note that the .INI entry "X25SubAddress=" for MTA in PC Mail version 3.2x is
	somewhat misleading because when the .INI also has the entry
	"CommType=X25Eicon", the "X25SubAddress" will always be the X.25 address of the
	network DCE the Eicon port is attached to (usually a 12-digit number composed of
	DNIC and a National Number), with the actual two-digit subaddress appended to
	the end of the long X.25 (X.121) address if it is needed. For MTAs launched with
	the INI entry "CommType=X25Atlan", the .INI entry "X25SubAddress=" is only two
	digits. The difference is due to design differences between the Ecion and
	Atlantis cards.
	
	Inter-Network
	-------------
	
	Sometimes to make a connection between two networks in two different countries,
	an extra digit is added before the DNIC, usually a one. This varies by vendor.
	
	The current maximum length for an X.121 address is 15 digits. The typical address
	length is 12 or 14 digits.
	
	Null-Modem Operation
	--------------------
	
	When two X.25 cards are connected with an X.25 null-modem cable, there is no
	network present and the long X.121 address is not needed. The optional two-digit
	subaddress will be needed if the X.25 cards are also connected to a LAN and will
	be establishing X.25 sessions for PC Mail version 3.2x MTAs, Gateways or MS
	Exchange processes running on LAN PCs, PCs without the X.25 card installed in
	them.
	
	Additional query words: prodnt 3.10
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	

{% endraw %}
