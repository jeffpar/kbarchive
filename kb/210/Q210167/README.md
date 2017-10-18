---
layout: page
title: "Q210167: INFO: Customizing Dynamic Collections"
permalink: kb/210/Q210167/
---

## Q210167: INFO: Customizing Dynamic Collections

	Article: Q210167
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbAdvertisement kbCollections kbQuery
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Dynamic collections can be created using an existing Systems Management Server
	query or by creating new query-based membership rules. In addition, when an
	existing Systems Management Server query is used, Systems Management Server
	copies the query and stores it with other information about the collection. If
	the Systems Management Server query is modified or deleted after the collection
	has been created, the collection itself is not affected.
	
	To configure a dynamic collection, first open the Systems Management Server
	Administrator and browse to Site Database <site code - site name>
	Collections. Then complete the following steps:
	
	1. Right-click the Details pane and select New Collection.
	
	2. Enter a collection name and optional comments.
	
	3. Click the Membership Rules tab and double-click the Query icon (icon with
	  yellow cylinder).
	
	4. Browse and select an existing Systems Management Server query, or enter a
	  query name.
	
	NOTE: If you use an existing Systems Management Server query, proceed to step 13
	below.
	
	5. Select a Resource class, bearing in mind what you wish to query for.
	
	6. Click the Edit Query statement.
	
	NOTE: Unlike creating a Systems Management Server query, here you cannot specify
	the query display format (General tab) and joins (Join tab).
	
	7. Select the Criteria tab, and double-click the New icon (icon with yellow
	  asterisk) to define a new criterion.
	
	8. Select your criterion type (usually Simple value), click Select and choose
	  Attribute.
	
	9. Specify an Attribute class and an Attribute.
	
	NOTE: You may chose to alias the Attribute class if you will be at some point
	editing the WQL statement directly.
	
	10. Click OK to close the Select Attribute dialog box.
	
	11. Select an operator which most closely evaluates the query, and specify a
	  value. Click Values to display the list of possible values.
	
	12. Click OK to close the Criterion Properties dialog box.
	
	NOTE: In the Query Statement Properties, you can create additional criteria or
	click OK to close out. In addition, you can limit the query to an existing
	collection for security purposes.
	
	13. Click OK to close out of Query Rule Properties.
	
	14. In the Collection Properties check box, select Update this collection on a
	  schedule and create an update interval.
	
	NOTE: Updating a collection can be helpful if the collection contains dynamic
	data like members of a user group.
	
	15. Click OK to complete the collection creation process.
	
	When the newly created collection shows up in the preview pane of the
	Administrator console, right-click All Tasks and double-click Update Collection
	Membership. This will run the specified query to update the collection
	membership.
	
	MORE INFORMATION
	================
	
	Subcollections allow you to perform an operation on containing a collection, and
	have that same operation automatically performed on its subcollections.
	Subcollections can be created by completing the following steps:
	
	1. Create a collection under an existing collection.
	
	2. Select the collection you want to contain the collection, right-click and
	  select point to New and click Link to Collection, then select the collection
	  you want to be the subcollection.
	
	Linking a subcollection this way actually creates a new instance of the
	collection. It is important to note that subcollections are not members of the
	containing collection, and therefore, do not inherit its attributes. The
	membership rules of collections and subcollections are completely separate.
	
	Additional query words: prodsms collections query
	
	======================================================================
	Keywords          : kbAdvertisement kbCollections kbQuery 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
