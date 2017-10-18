---
layout: page
title: "Q241324: XFOR: DocErr: Filter Rules Only Support EQ and NE Operators"
permalink: kb/241/Q241324/
---

## Q241324: XFOR: DocErr: Filter Rules Only Support EQ and NE Operators

	Article: Q241324
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page 272 of Notes From the Field: Deploying Microsoft Exchange Server 5.5, in
	the "Filter Rules" section, lists the following operators for filtering users
	during directory synchronization between Exchange Server 5.5 and Lotus Notes:
	
	  - EQ - Propagate if the given attribute is equal to a specified value
	  - NE - Propagate if the given attribute is not equal to specified value
	  - SW - Propagate if the given attribute starts with a specified string
	  - DNSW - Propagate if the given attribute does not start with a specified
	  string
	  - CN - Propagate if the given attribute contains a specified string
	  - DNCN - Propagate if the given attribute does not contain a specified string
	
	These are incorrect. The filtering capabilities in the Microsoft Exchange Notes
	Connector only support the EQ and NE operators.
	
	MORE INFORMATION
	================
	
	Filter rules take the form:
	
	  filter_rule_name = <Notes_Attribute_Name>, <OPERATOR>,
	  <Value1> | <Value2>...
	
	<Value1> must exist. If you need multiple values, you can separate them by
	using a vertical bar (|) or ampersand (&). The vertical bar is used as a
	logical OR operator, and the ampersand is used as a logical AND operator. When
	multiple filters are in use, the results of the filters are determined by
	logically ANDing them together. The results are used to determine if an entry
	should be synchronized.
	
	The rule for entries being synchronized from Lotus Notes to Exchange Server must
	be specified in the LME-NOTES-DXANOTES section of the Exchconn.ini file, located
	in the Exchsrvr\Connect\Exchconn folder. The rule must start with a prefix of
	"filter" (for example, "filter_company = "). You can have multiple rules as long
	as each rule begins with the proper prefix.
	
	The <Notes_Attribute_Name> should be one of the valid Lotus Notes
	attributes as defined in a person or group document in Lotus Notes. Thus, filter
	rules are applied based on an attribute value of a person and group document. If
	you specify an invalid attribute name, that particular filter will be void but
	the connector will continue to run with no error.
	
	NOTE: The attribute name does not correspond to the first column of the Amap.tbl
	file. The Amap.tbl file is used by the Exchange Notes Connector to define
	mapping rules.
	
	Again, the <OPERATOR> of the filter rule is limited to either EQ for equal
	or NE for not equal. The filter rule is an inclusive operator, that is, it
	propagates objects that fulfill the filter requirement.
	
	You must recycle the connector every time you update or modified the filter
	rules.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
