---
layout: page
title: "Q199102: SMS: How to Define a Collection Using Direct Membership Rules"
permalink: /kb/199/Q199102/
---

## Q199102: SMS: How to Define a Collection Using Direct Membership Rules

	Article: Q199102
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbCollections kbsmsAdmin
	Last Modified: 06-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to set up a collection using the Direct Membership
	Rules Wizard. Direct Membership Rules are used to create static members in a
	collection. This method can be used to emulate static machine groups from
	previous versions of Systems Management Server.
	
	MORE INFORMATION
	================
	
	Steps to Create a New Collection Using Direct Membership Rule
	-------------------------------------------------------------
	
	1. Open the Microsoft Management Console (MMC). Right-click Collections in the
	  left pane, point to New on the shortcut menu, and click Collection.
	
	2. Type a name for the new collection. If you want, also type a comment, such as
	  a description of the collection's purpose.
	
	3. Choose the Membership Rules tab and click New Direct Membership (leftmost on
	  the toolbar above the text box) to start the Direct Membership Rules Wizard.
	  When the wizard's Welcome dialog box appears, click Next.
	
	4. The Search for Resources dialog box is used to gather a list of potential
	  members. You can select members from this list to add to the collection. Note
	  that the criteria you specify in this dialog box will not be used to later
	  re-evaluate the collection. In using a Direct Membership Rule, you are
	  selecting specific resources from the database to be added to the collection.
	  The criteria defined in this dialog box are used to determine the contents of
	  the Select Resources dialog box. After choosing the criteria, click Next to
	  go to the Collection Limiting dialog box. See the following examples:
	
	   - To list all instances of a given resource class (Users, User Groups, or
	     System Resources) using the Select Resources dialog box, use the Resource
	     Class list to determine which class will be listed. Select Agent Name as
	     the Attribute Name and use the character "%" as the value.
	
	   - To list all Systems Management Server clients in a site using the Select
	     Resources dialog box, use the following criteria:
	
	  Resource class: System Resource
	  Attribute name: Client
	  Value: 1
	
	
	5. Use the Collection Limiting dialog box to specify a collection to search for
	  the resources specified in the Search for Resources dialog box. This is
	  useful if the account you are using does not have the rights to search the
	  entire resource database or if you would like to further filter your results
	  set. This value can be left blank to search the entire resource database.
	  After specifying the desired search collection (if any), click Next to
	  continue to the Select Resources dialog box.
	
	6. The Select Resources dialog box includes a list of resources that match the
	  criteria entered in steps 4 and 5 above. Individual resources can be selected
	  for membership here. After selecting the resources you want to be direct
	  members of the collection, click Next to go on to the completion dialog box.
	
	7. Verify the list of resources, then add the rule by clicking Finish.
	
	8. Click OK to add the new collection to the site database.
	
	Notes:
	------
	
	- You can control access to a collection through the Security tab of the
	  Properties dialog box.
	
	- Collections can have multiple Direct Membership Rules, so if the wizard won't
	  allow selection of all the resources you want using one rule (for example,
	  resources from different resource classes), simply create additional rules to
	  add the other resources.
	
	- For collections containing only Direct Membership Rules, the Update this
	  Collection on a Schedule check box should be cleared because this setting
	  will have no effect on membership for these collections.
	
	Additional query words: prodsms collections
	
	======================================================================
	Keywords          : kbsms200 kbCollections kbsmsAdmin 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
