---
layout: page
title: "Q183558: Conformance to ADO 2.0 and OLE DB 2.0"
permalink: /kb/183/Q183558/
---

## Q183558: Conformance to ADO 2.0 and OLE DB 2.0

{% raw %}

	Article: Q183558
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB Provider for AS/400 and VSAM, version 1.0, used with:
	   - Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This is a list of nonconformance problems that may occur:
	
	IDBProperties->GetPropertyInfo is not level 0 compliant for certain
	properties.
	
	IOpenRowset::OpenRowset gives incorrect results when rgPropertySets = NULL and
	cPropertySets <> 0.
	
	IOpenRowset::OpenRowset fails when rgProperties is NULL and cPropertySets
	<> 0.
	
	IOpenRowset::OpenRowset returns incorrect error when TableID is NULL.
	
	Opening rowset produces incorrect error when a SETIFCHEAP property set is not
	set.
	
	IOpenRowset::OpenRowset fails to return an error when properties are set
	incorrectly.
	
	IOpenRowset::OpenRowset does not give correct errors when table ID = NULL.
	
	IDBProperties::GetPropertyInfo causes an exception.
	
	When IDBProperties::GetProperties fails, *prgPropertySets should be NULL but is
	not.
	
	IDBProperties tests cause an assertion failure.
	
	QueryInterface for IID_IConnectionPointContainer gives E_NOINTERFACE.
	
	CODBProperty::Save makes unsmurfy call to VariantChangeType--this breaks
	IPersistFile::Save.
	
	Attempting to set data to the bookmark column does not result in correct status
	value IRowsetNewRow::BMK_key_curs_immed v1.
	
	IRowsetupdate::Insertrow should return DB_E_BADACCESSORHANDLE when accessor = 0
	iRowsetNewRow::bound_key_immed v1.
	
	ISessionProperties::GetProperties needs to return null prgPropertySets when error
	occurs.
	
	An exception is caused in CODBPropertyManager::GetProperties when it gets invalid
	arguments.
	
	Assertion fails in CODBPropertyManager::GetAllProperties -- ulcount = 0.
	
	Another assertion failure--in CODBPropertyManager::GetProperties
	rgPropertyIDSets[i].cPropertyIDs = 0.
	
	An exception is caused in CODBPropertyManager::SetProperties when it gets invalid
	arguments.
	
	CreateAccessor does not detect binding err conditions well and if it did detect
	an error condition, it would not return an error code
	IAccessor::TCCreateValidRowAccessors v12.
	
	IConvertType::CanConvert has no validity checking (or use of) dwConvertFlags
	icnvttyp::TCcanconvert v5.
	
	Getting DBSCHEMA_INDEXES causes an exception.
	
	GetPropertyInfo does not return correct output values when E_INVALIDARG occurs.
	
	IRowset->TCIRowset_RetrieveData variation 5 causes an exception in
	IdataConvert.
	
	CODBIRowsetLocate::GetNextRows does not return correct values when given invalid
	arguments IRowset::TCIRowset_Boundary::V7.
	
	CODBIRowsetUpdate::SetData needs to validate arguments before returning with no
	error.
	
	When IOpenRowset::OpenRowset fails, ppRowset should be null.
	
	IOpenRowset::OpenRowset returns incorrect error when TableID's pwszName is bad
	IOpenrowset::Openrowset v68,69,72, 73.
	
	Opening rowset produces incorrect error when a SETIFCHEAP property is not
	succesfully set.
	
	CODBPropertyManager::SetProperties never notices if dwOptions specifies a bad
	option.
	
	IOpenRowset::OpenRowset deliberately sets properties even though they are
	read-only.
	
	An invalid colid (in the DBPROP structure) is ignored by
	CODBPropertyManager::SetProperties.
	
	IOpenRowset::OpenRowset does not check that the interface in riid is supported
	when pprowset = NULL.
	
	IOpenrowset::Openrowset v46 fails because we return an invalid hr.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 4.0's OLE DB Provider
	for AS/400 and VSAM version 1.0.
	
	
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next service pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbOLEDBSearch kbOLEDBProvSearch
	Version           : WINDOWS:1.0,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
