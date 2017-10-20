---
layout: page
title: "Q97550: Cable Considerations for Network Installations"
permalink: /kb/097/Q97550/
---

## Q97550: Cable Considerations for Network Installations

{% raw %}

	Article: Q97550
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	This article points out some things to consider when cabling a network
	installation.
	
	MORE INFORMATION
	================
	
	Before Cabling
	--------------
	
	Create a to-scale cabling diagram, preferably on computer (for those changes that
	are bound to come). Show where all cable runs, repeaters, and wiring closets
	are. Indicate types of cabling and post this on the wall. Also consider what
	cabling changes may be needed in the future.
	
	When Running Cable
	------------------
	
	- Get high-quality cable that is clearly labeled as RG-58/A-AU, (Ethernet) or
	  73-ohm RG-62/A-AU (Arcnet, 3270, etc).
	
	- Be cautious when pulling and pushing cable to avoid damaging it. A kink can
	  cause reflection problems.
	
	- Keep cabling away from fluorescent lights, motors, power wires, and
	  electronic devices to avoid electromagnetic energy.
	
	- Don't run cable under carpet.
	
	- Put a label on all cabling parts, including wall plates, and all parts in the
	  wiring closet.
	
	- Run two lengths of cable instead of just one as it will be easier in the
	  future to replace with the second run.
	
	- Consider using a company skilled in cabling your installation, that will
	  certify the cabling plan.
	
	- With twisted pair, don't share the same conduit as phone wire; the ringer
	  signal creates a destructive voltage.
	
	- For twisted pair, don't use silver satin cable. Twisted pair should conform
	  to IBM's Type 3 standard: two pairs of 24-gauge solid copper wire.
	
	Cable's Requirements
	--------------------
	
	Make sure the cable you are going to use meets the National Electrical Code (NEC)
	standard for maximum amount of toxins a burning cable can produce. Check other
	local and national building codes. There are distinct distance limitations on
	each type of cabling; stay within those limits.
	
	Ethernet Cabling Specifications:
	
	- 10BASET (10 megabits per second transmission speed, baseband, unshielded
	  twisted pair)
	
	- Use unshielded twisted pair (UTP)
	
	- DIX/AUI or RJ45 connection on NIC
	
	- Workstations no more than 328 ft from wiring closet
	
	- 1023 stations without bridging
	
	- One hub can connect 12 workstations
	
	- 12 hubs to one central hub
	
	- Minimum cable length between workstations: 8 ft.
	
	10BASE2:
	
	- (10 megabits per second transmission speed, baseband 200 meters) Coax
	  thin-net (also known as "cheapernet") cable.
	
	- Ethernet .2-inch diameter 50-ohm RG-58 A/U
	
	- On-board transceiver
	
	- Length of trunk segment 607 ft.
	
	- 30 workstations per trunk
	
	- 1024 workstations maximum per network.
	
	- Entire network trunk 3035 ft
	
	- Minimum cable length between workstations - 20 inches
	
	10BASE5:
	
	- (10 megabits per second, baseband 500 meters)
	
	- Ethernet .4-inch diameter, 50-ohm RG-11
	
	- DIX/AUI connection on the NIC
	
	- External transceiver
	
	- Trunk segment length 1640 ft.
	
	- Entire trunk length 8200 ft.
	
	- Minimum cable length between taps - 8 ft.
	
	10BROAD36:
	
	- (10 megabits per second, broadband 3600 meters) Ethernet 50 ohm coaxial cable
	
	- Transceivers for either single cable (with head-end frequency translator) or
	  dual cable (with a head-end cable loop) network
	
	- Ethernet channel takes 18 MHz
	
	10BASEF:
	
	- Fiber optic inter-repeater link (FOIRL)
	
	- Maximum distance - 1 kilometer
	
	Token Ring Cabling Specifications:
	
	- Physical medium - Coax, twisted pair
	
	- Type 1 - shielded twisted pair
	
	- Maximum 260 workstations on Type 1 or fiber optic cable at 16 mbps
	
	- Type 3 - unshielded twisted pair
	
	- Maximum 72 workstations on Type 3 cable at 4 mbps
	
	- Media filter for UTP
	
	- Multistation Access Units (MSAUs)- distance between MSAUs 100 meters(Type 1)
	  to 45 meters (Type 2) to 4 kilometers with fiber optic cable
	
	- Each ring can have up to 33 MSAUs
	
	Arcnet Cabling Specifications:
	
	- Baseband/broadband token passing
	
	- Coax, twisted pair, fiber optic
	
	- 2.5 mbps transmission speed
	
	- 93-ohm RG-62U Coax
	
	- BNC connection on NIC
	
	- Bus segment length for coax - maximum 1000 ft.
	
	- Eight workstations per coax segment
	
	- Bus segment length for twisted pair - maximum 400 ft.
	
	- 10 workstations per twisted pair segment
	
	- 255 workstations maximum per network
	
	- Workstations can be 600 ft. from active hub
	
	- Passive hubs maximum distance from active hub - 100 ft.
	
	- Maximum distance between workstations - 20,000 ft.
	
	- No more than four workstations on a passive hub, no more than 100 ft from hub
	
	- Passive hubs cannot be connected to other passive hubs
	
	- Maximum distance between two active hubs - 2000 ft.
	
	Connecting Cable
	----------------
	
	Make sure to terminate the ends of ethernet cable. Use good UG-274 T-connectors.
	Make certain that the terminator matches the cable. For example, if using 53-ohm
	impedance RG-58/A-AU cable, use a 53 ohm terminator. When connecting two
	segments, check that the segments are the same type: For example, don't connect
	RG-62 Arcnet cable to RG-58 Ethernet. The Ethernet 5-4-3 Rule for connecting
	segments is five trunk segments can be connected, with four repeaters or
	concentrators, with no more than three populated segments (on coax).
	
	Cable Administration
	--------------------
	
	Central wiring closets are easier to maintain, even if coaxial cable is the
	medium.
	
	Additional query words: adapter 2.20 Cable install setup
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	

{% endraw %}
