---
layout: page
title: "Q103379: PC Adm: How to Create Groups Spanning Multiple Postoffices"
permalink: kb/103/Q103379/
---

## Q103379: PC Adm: How to Create Groups Spanning Multiple Postoffices

	Article: Q103379
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	Using versions 3.0 and 3.2 of Microsoft Mail for PC Networks, you can
	create groups on one postoffice (PO) that span multiple postoffices.
	There are several different ways to do this, depending on the level of
	detail you want available to the users. This article describes two
	scenarios.
	
	Configuration Information
	-------------------------
	
	PO1 has 20 users whose names begin with A (Adam,Andy,Alex,Ann,...).
	
	PO2 has 20 users whose names begin with B (Bob,Brad,Bret,Barb,...).
	
	PO3 has 20 users whose names begin with C (Carl,Cary,Chris,Carol,...).
	
	All three postoffices are connected via the External Mail program and
	form the entire Mail system.
	
	Scenario 1
	----------
	
	The ABC company wants each postoffice to have a group name that, when
	selected, allows mail to be sent to everyone in the company. To set up
	this scenario so that the least amount of maintenance is needed, do
	the following:
	
	1. Create a group on each postoffice titled "All PO# Users," where # is the
	  postoffice number. Each group should contain 20 members and should contain
	  ALL local users, but NO external users.
	
	2. Export updated address lists among all postoffices (or let the directory
	  synchronization (Dir-Sync) cycle complete).
	
	  NOTE: If a group only contains users on the local postoffice, it can
	  participate in Dir-Sync.
	
	3. From the Administrator program on each postoffice, merge the two group names
	  from the other postoffices into the local postoffice address list (POL) using
	  the Address, Create command.
	
	4. Create an "All Users at ABC Company" group on EACH postoffice. The group
	  should contain all 20 local users (the same users as in step 1 above) AND the
	  2 "All PO# Users" group names from the other 2 postoffices (22 names in
	  all).
	
	  Notes:
	
	   - Once the groups in step 4 have been created, you should not export the
	     address list again. Doing so will create duplicate group names on the
	     Global Address List (GAL).
	
	   - Because this group will contain two external addresses, it will not
	     participate in Dir-Sync.
	
	General Notes
	-------------
	
	- Whenever a new user is added to a local postoffice, the administrator of that
	  postoffice should add the new user to both the All PO# Users group and the
	  All Users at ABC Company group on the local postoffice.
	
	- Details on the members of the groups at the external postoffices will not be
	  available from the local postoffice.
	
	Scenario 2
	----------
	
	Andy, Alex, Ann, Brad, Bret, Barb, Cary, Chris, and Carol are working
	on a new project for the ABC company. They want to set up a group name
	on each postoffice that all their users will use to submit
	project-related mail. This way, all project members will be kept
	abreast of any changes or developing problems.
	
	1. From the Administrator program on each postoffice, use the Address, Create
	  command to merge six addresses from the other postoffices into the local
	  postoffice address list. The addresses to merge are the individual project
	  members located on each of the other two postoffices.
	
	2. Create a "Hot Project" group on EACH postoffice containing the three local
	  project members and the six merged addresses of the external project members.
	
	Notes
	-----
	
	- Any external address merged into a local postoffice address list is like a
	  snapshot in that it only captures one moment in time. Any changes made at the
	  external postoffice (even with Dir-Sync or address exporting) will not be
	  reflected in the merged address. All changes will require manual
	  administration.
	
	- Because all group members have been individually merged into the local
	  postoffice address list, all details will be available for the "Hot Project"
	  group.
	
	MORE INFORMATION
	================
	
	For information on automating groups as similar to Scenario 2 above, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q124044 PC Adm: Replicating Postoffice Address List Groups Between POs
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
